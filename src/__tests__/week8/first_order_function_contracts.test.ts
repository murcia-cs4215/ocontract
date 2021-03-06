import { intType } from 'types/utils';
import { expectContractViolation, runTest } from 'utils/tests';

test('argument contract violation', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x - 1;;
f 0;;`);
  expectContractViolation(res, 'main', 2, 0); // contract definition location
});

test('return result contract violation', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x - 1;;
f 1;;`);
  expectContractViolation(res, 'f', 2, 0); // contract definition location
});

test('no violation', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x - 1;;
f 2;;`);
  expect(res).toEqual({
    status: 'finished',
    type: intType,
    value: 1,
  });
});

test('curried functions propagate contracts', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0 -> gt0;;
let f (x : int) (y : int) : int = x + y;;
let g : int -> int = f 1;;
g (-2);;`);
  expectContractViolation(res, 'main', 2, 0); // contract definition location
});

test('contract violation for function contracts using alternate syntax', () => {
  const res =
    runTest(`contract f = {x : int | x > 0} -> {y : int | y > 0} -> {z : int | z > 0};;
let f (x : int) (y : int) : int = x + y;;
let g : int -> int = f 1;;
g (-2);;`);
  expectContractViolation(res, 'main', 1, 0); // contract definition location
});

test('contract satisfied for function contracts using alternate syntax', () => {
  const res =
    runTest(`contract f = {x : int | x > 0} -> {y : int | y > 0} -> {z : int | z > 0};;
let f (x : int) (y : int) : int = x + y;;
let g : int -> int = f 1;;
g 1;;
`);
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: intType,
  });
});

test('can detect precondition violation for complex contracts', () => {
  const res =
    runTest(`let notEqTriple (a : int) (b : int) (c : int) : int -> bool = fun (d : int) : bool -> d != a && d != b && d != c;;
contract f = (notEqTriple 1 2 3) -> (notEqTriple 1 2 3) -> (notEqTriple 1 2 3);;
let f (x : int) (y : int) : int = x + y;;
let g : int -> int = f 1;;
g 1;;`);
  expectContractViolation(res, 'g', 2, 0); // contract definition location
});

test('can detect postcondition violation for complex contracts', () => {
  const res =
    runTest(`let notEqTriple (a : int) (b : int) (c : int) : int -> bool = fun (d : int) : bool -> d != a && d != b && d != c;;
contract f = (notEqTriple 1 2 3) -> (notEqTriple 1 2 3) -> (notEqTriple 1 2 3);;
let f (x : int) (y : int) : int = x + y;;
let g : int -> int = f 4;;
g (-1);;`);
  expectContractViolation(res, 'f', 2, 0); // contract definition location
});

test('contract satisfied for complex contracts', () => {
  const res =
    runTest(`let notEqTriple (a : int) (b : int) (c : int) : int -> bool = fun (d : int) : bool -> d != a && d != b && d != c;;
contract f = (notEqTriple 1 2 3) -> (notEqTriple 1 2 3) -> (notEqTriple 1 2 3);;
let f (x : int) (y : int) : int = x + y;;
let g : int -> int = f 4;;
g 4;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 8,
    type: intType,
  });
});

test('calling function with a contract in let local binding', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x + 1;;
let g : int = let x : int = 0 in f x;;`);
  expectContractViolation(res, 'g', 2, 0); // contract definition location
});

test('contract violation when executing binary op', () => {
  let res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x + 1;;
let g : int = f 0 + f 1;;`);
  expectContractViolation(res, 'g', 2, 0); // contract definition location

  res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x + 1;;
let g : int = f 1 + f 0;;`);
  expectContractViolation(res, 'g', 2, 0); // contract definition location
});

test('contract violation when executing unary op', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x + 1;;
let g : int = -(f 0);;`);
  expectContractViolation(res, 'g', 2, 0); // contract definition location
});

test('contract violation when executing conditional', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x + 1;;
let g : int = if (f 1) == 2 then f 0 else f 1;;`);
  expectContractViolation(res, 'g', 2, 0); // contract definition location
});

test('contract violation in lambda', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x + 1;;
let g : int -> int = fun (x : int) : int -> 1 + f x;;
g 0;;`);
  expectContractViolation(res, 'g', 2, 0); // contract definition location
});

test('contract satisfied when executing binary op', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x + 1;;
let g : int = f 1 + f 1;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 4,
    type: intType,
    name: 'g',
  });
});

test('contract satisfied when executing unary op', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x + 1;;
let g : int = -(f 1);;`);
  expect(res).toEqual({
    status: 'finished',
    value: -2,
    type: intType,
    name: 'g',
  });
});

test('contract satisfied when executing conditional', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x + 1;;
let g : int = if (f 1) == 2 then f 1 else f 2;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: intType,
    name: 'g',
  });
});

test('contract satisfied in lambda', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0 -> gt0;;
let f (x : int) : int = x + 1;;
let g : int -> int = fun (x : int) : int -> 1 + f x;;
g 1;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 3,
    type: intType,
  });
});
