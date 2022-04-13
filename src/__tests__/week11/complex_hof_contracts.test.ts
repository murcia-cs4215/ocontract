import { expectContractViolation, runTest } from 'utils/tests';

test('function with hof contract violating its own contract', () => {
  // f should not pass in a negative number into a since its own contract restricts x > 0
  const res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let f (a : int -> int) : int = a (-10);;
  
contract g = {x : int | x < 0} -> {y : int | y > 0};;
let g (a : int) : int = -a;;
  
f g;;`);

  // Blame f for passing in an invalid negative argument into a.
  expectContractViolation(res, 'f', 1, 0);
});

test("function with hof contract violating that function's contract", () => {
  // f is doing what is supposed to be correct, but this violates g's contract, so main is at fault here
  const res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract g = {x : int | x < 0} -> {y : int | y > 0};;
let g (a : int) : int = -a;;

f g;;`);

  // Blame main for passing in a function with a different contract to us.
  expectContractViolation(res, 'main', 4, 0);
});

test('function with hof contract being passed in a function that violates its own contract (but not the hof contract)', () => {
  // f is behaving properly, but g violates its own contract
  const res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y < 0}) -> {z : int | z < 0};;
let f (a : int -> int) : int  = a 10;;

contract g = {x : int | x > 0} -> {y : int | y > 0};;
let g (a : int) : int = -a;;

f g;;`);

  // Blame g for violating its own contract
  expectContractViolation(res, 'g', 4, 0);
});

test("function with hof contract that returns a result violating this function's hof return contract", () => {
  // f expects y > 0 from its hof arg but g gives y < 0
  const res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract g = {x : int | x > 0} -> {y : int | y < 0};;
let g (a : int) : int = -a;;

f g;;`);

  // Blame main for passing in a function with a different contract to us.
  expectContractViolation(res, 'main', 1, 0);
});

test("function with hof contract that returns a result violating this function's return value contract", () => {
  // f expects z > 0 from its hof arg but g gives z < 0
  const res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | true}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract g = {x : int | x > 0} -> {y : int | y < 0};;
let g (a : int) : int = -a;;

f g;;`);

  // Blame main for passing in a function with a different contract to us.
  expectContractViolation(res, 'main', 1, 0);
});
