import { expectContractViolation, runTest } from 'utils/tests';

test('function with hof contract violating its own contract', () => {
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
  const res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > 0}) -> {z : int | z > 0};;
let f (a : int -> int) : int  = a 10;;

contract g = {x : int | x < 0} -> {y : int | y > 0};;
let g (a : int) : int = -a;;

f g;;`);

  // Blame main for passing in a function with a different contract to us.
  expectContractViolation(res, 'main', 4, 0);
});
