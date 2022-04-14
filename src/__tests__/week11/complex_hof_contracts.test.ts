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
  // f's argument contract is not strict enough to ensure that its return value contract is fulfilled.
  const res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | true}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract g = {x : int | x > 0} -> {y : int | y < 0};;
let g (a : int) : int = -a;;

f g;;`);

  // Blame f for not having sufficiently strict conditions
  expectContractViolation(res, 'f', 1, 0);
});

test('hof passed twice with violation on original contract', () => {
  // Violate original parameter contract
  let res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract h = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let h (b : int -> int) : int = f b;;

contract g = {x : int | x < 0} -> {y : int | y > 0};;
let g (a : int) : int = -a;;

h g;;`);

  // Blame main for passing in an inappropriate function
  expectContractViolation(res, 'main', 7, 0);

  // Violate original return value contract
  res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract h = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let h (b : int -> int) : int = f b;;

contract g = {x : int | x > 0} -> {y : int | y < 0};;
let g (a : int) : int = a;;

h g;;`);

  // Blame g for violating its own contract
  expectContractViolation(res, 'g', 7, 0);
});

test("hof passed twice with violation on first function's contract", () => {
  // Violate h's hof parameter contract
  let res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract h = ({x : int | x < 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let h (b : int -> int) : int = f b;;

contract g = {x : int | x > 0} -> {y : int | y > 0};;
let g (a : int) : int = a;;

h g;;`);

  // Blame h for passing b into f knowing that the contracts don't match up
  expectContractViolation(res, 'h', 4, 0);

  // Violate h's hof return value contract
  res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract h = ({x : int | x > 0} -> {y : int | y < 0}) -> {z : int | z > 0};;
let h (b : int -> int) : int = f b;;

contract g = {x : int | x > 0} -> {y : int | y > 0};;
let g (a : int) : int = a;;

h g;;`);

  // Blame main for passing in g into h, which doesn't fulfil the contract
  expectContractViolation(res, 'main', 4, 0);
});

test("hof passed twice with violation on second function's contract", () => {
  // Violate f's hof parameter contract
  let res =
    runTest(`contract f = ({x : int | x < 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract h = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let h (b : int -> int) : int = f b;;

contract g = {x : int | x > 0} -> {y : int | y > 0};;
let g (a : int) : int = a;;

h g;;`);

  // Blame f for violating its own contract
  expectContractViolation(res, 'f', 1, 0);

  // Violate f's hof return value contract
  res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y < 0}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract h = ({x : int | x > 0} -> {y : int | y < 0}) -> {z : int | z > 0};;
let h (b : int -> int) : int = f b;;

contract g = {x : int | x > 0} -> {y : int | y > 0};;
let g (a : int) : int = a;;

h g;;`);

  // Blame h for passing in a into f, which doesn't fulfil the contract
  expectContractViolation(res, 'h', 1, 0);
});
