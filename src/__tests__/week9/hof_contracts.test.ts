import { intType } from 'types/utils';
import { assertContractViolation, runTest } from 'utils/tests';

test('argument that is a hof has a contract precondition violation', () => {
  const res = runTest(`let gt9 (x: int) : bool = x >= 9;;
let bet0_99 (x: int) : bool = x >= 0 && x <= 99;;
contract g = (gt9 -> bet0_99) -> bet0_99;;
let g (f: int -> int) : int = f 0;;
g (fun (x: int) : int -> 25);;`);
  assertContractViolation(res, 'g', 2, 4);
});

test('argument that is a hof has a contract postcondition violation', () => {
  const res = runTest(`let gt9 (x: int) : bool = x >= 9;;
let bet0_99 (x: int) : bool = x >= 0 && x <= 99;;
contract g = (gt9 -> bet0_99) -> bet0_99;;
let g (f: int -> int) : int = f 10;;
g (fun (x: int) : int -> 100);;`);
  assertContractViolation(res, 'main', 3, 4);
});

test('hof has a contract postcondition violation', () => {
  const res = runTest(`let gt9 (x: int) : bool = x >= 9;;
let bet0_99 (x: int) : bool = x >= 0 && x <= 99;;
contract g = (gt9 -> bet0_99) -> bet0_99;;
let g (f: int -> int) : int = (f 10) + 2;;
g (fun (x: int) : int -> 98);;`);
  assertContractViolation(res, 'g', 3, 4);
});

test('hof with alternate contract syntax has contract violation in its argument which is a hof', () => {
  const res =
    runTest(`contract f1 = ({x | x > 0} -> {y | y > 1}) -> {z | z > 0};;
let f1 (g: int -> int) : int = (g 0) - 5;;
f1 (fun (x: int) : int -> x + 1);;`);
  assertContractViolation(res, 'f1', 2, 19);
});

test("complex hof has a contract violation in its argument's argument", () => {
  let res =
    runTest(`contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 1) + (h 100) + 1000;;
let id (x: int) : int = x;;
f id id;;`);
  assertContractViolation(res, 'f', 2, 50);

  res =
    runTest(`contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 0) + (h 101) + 1000;;
let id (x: int) : int = x;;
f id id;;`);
  assertContractViolation(res, 'f', 2, 18);
});

test("complex hof has a contract violation in its argument's return val", () => {
  let res =
    runTest(`contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 2) + (h 101) + 1000;;
let id (x: int) : int = x - 1;;
f id id;;`);
  assertContractViolation(res, 'main', 2, 67);

  res =
    runTest(`contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 1) + (h 102) + 1000;;
let id (x: int) : int = x - 1;;
f id id;;`);
  assertContractViolation(res, 'main', 2, 33);
});

test('complex hof has a contract violation in its return val', () => {
  const res =
    runTest(`contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
let f (g: int -> int) (h: int -> int) : int = (g 2) + (h 101);;
let id (x: int) : int = x;;
f id id;;`);
  assertContractViolation(res, 'f', 2, 85);
});

test('complex hof satisfies contract', () => {
  const res =
    runTest(`contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
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
  assertContractViolation(res, 'main', 2, 4);

  res = runTest(`let gt0 (x : int) : bool = x > 0;;
contract f = gt0 -> (gt0 -> gt0);;
let f (x: int) : (int -> int) = fun (y : int) : int -> y - 1;;
f 1 1;;`);
  assertContractViolation(res, 'f', 2, 4);
});
