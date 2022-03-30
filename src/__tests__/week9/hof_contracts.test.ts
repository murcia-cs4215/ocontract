import { intType } from 'types/utils';
import { expectContractViolation, runTest } from 'utils/tests';

test('argument that is a hof has a contract precondition violation', () => {
  const res = runTest(`let gt9 (x: int) : bool = x >= 9;;
let bet0_99 (x: int) : bool = x >= 0 && x <= 99;;
contract g = (gt9 -> bet0_99) -> bet0_99;;
let g (f: int -> int) : int = f 0;;
g (fun (x: int) : int -> 25);;`);
  expectContractViolation(res, 'g', 3, 0); // contract definition location
});

test('argument that is a hof has a contract postcondition violation', () => {
  const res = runTest(`let gt9 (x: int) : bool = x >= 9;;
let bet0_99 (x: int) : bool = x >= 0 && x <= 99;;
contract g = (gt9 -> bet0_99) -> bet0_99;;
let g (f: int -> int) : int = f 10;;
g (fun (x: int) : int -> 100);;`);
  expectContractViolation(res, 'main', 3, 0); // contract definition location
});

test('hof has a contract postcondition violation', () => {
  const res = runTest(`let gt9 (x: int) : bool = x >= 9;;
let bet0_99 (x: int) : bool = x >= 0 && x <= 99;;
contract g = (gt9 -> bet0_99) -> bet0_99;;
let g (f: int -> int) : int = (f 10) + 2;;
g (fun (x: int) : int -> 98);;`);
  expectContractViolation(res, 'g', 3, 0); // contract definition location
});

test('hof with alternate contract syntax has contract violation in its argument which is a hof', () => {
  const res =
    runTest(`contract f1 = ({x : int | x > 0} -> {y : int | y > 1}) -> {z : int | z > 0};;
let f1 (g: int -> int) : int = (g 0) - 5;;
f1 (fun (x: int) : int -> x + 1);;`);
  expectContractViolation(res, 'f1', 1, 0); // contract definition location
});

test("complex hof has a contract violation in its argument's argument", () => {
  let res =
    runTest(`contract f = ({a : int | a > 0} -> {b : int | b > 0}) -> ({c : int | c > 100} -> {d : int | d > 100}) -> {e : int | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 1) + (h 100) + 1000;;
let id (x: int) : int = x;;
f id id;;`);
  expectContractViolation(res, 'f', 1, 0); // contract definition location

  res =
    runTest(`contract f = ({a : int | a > 0} -> {b : int | b > 0}) -> ({c : int | c > 100} -> {d : int | d > 100}) -> {e : int | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 0) + (h 101) + 1000;;
let id (x: int) : int = x;;
f id id;;`);
  expectContractViolation(res, 'f', 1, 0); // contract definition location
});

test("complex hof has a contract violation in its argument's return val", () => {
  let res =
    runTest(`contract f = ({a : int | a > 0} -> {b : int | b > 0}) -> ({c : int | c > 100} -> {d : int | d > 100}) -> {e : int | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 2) + (h 101) + 1000;;
let id (x: int) : int = x - 1;;
f id id;;`);
  expectContractViolation(res, 'main', 1, 0); // contract definition location

  res =
    runTest(`contract f = ({a : int | a > 0} -> {b : int | b > 0}) -> ({c : int | c > 100} -> {d : int | d > 100}) -> {e : int | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 1) + (h 102) + 1000;;
let id (x: int) : int = x - 1;;
f id id;;`);
  expectContractViolation(res, 'main', 1, 0); // contract definition location
});

test('complex hof has a contract violation in its return val', () => {
  const res =
    runTest(`contract f = ({a : int | a > 0} -> {b : int | b > 0}) -> ({c : int | c > 100} -> {d : int | d > 100}) -> {e : int | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 2) + (h 101);;
let id (x: int) : int = x;;
f id id;;`);
  expectContractViolation(res, 'f', 1, 0); // contract definition location
});

test('complex hof satisfies contract', () => {
  const res =
    runTest(`contract f = ({a : int | a > 0} -> {b : int | b > 0}) -> ({c : int | c > 100} -> {d : int | d > 100}) -> {e : int | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 1) + (h 101) + 1000;;
let id (x: int) : int = x;;
f id id;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 1102,
    type: intType,
  });
});

test('hof that returns hof has a contract violation', () => {
  let res = runTest(`let gt0 (x : int) : bool = x > 0;;
contract f = gt0 -> (gt0 -> gt0);;
let f (x: int) : (int -> int) = fun (y : int) : int -> y;;
f 1 0;;`);
  expectContractViolation(res, 'main', 2, 0); // contract definition location

  res = runTest(`let gt0 (x : int) : bool = x > 0;;
contract f = gt0 -> (gt0 -> gt0);;
let f (x: int) : (int -> int) = fun (y : int) : int -> y - 1;;
f 1 1;;`);
  expectContractViolation(res, 'f', 2, 0); // contract definition location
});
