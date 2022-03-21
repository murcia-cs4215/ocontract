import { intType } from 'types/utils';
import { checkContractViolation, runTest } from 'utils/tests';

import { createContext } from '../../context';
import { run } from '../../index';

test('argument that is a hof has a contract precondition violation', () => {
  const context = createContext();
  const res = run(
    `
    let gt9 (x: int) : bool = x >= 9;;
    let bet0_99 (x: int) : bool = x >= 0 && x <= 99;;
    contract g = (gt9 -> bet0_99) -> bet0_99;;
    let g (f: int -> int) : int = f 0;;
    g (fun (x: int) : int -> 25);;
  `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  checkContractViolation(context, 'g');
});

test('argument that is a hof has a contract postcondition violation', () => {
  const context = createContext();
  const res = run(
    `
    let gt9 (x: int) : bool = x >= 9;;
    let bet0_99 (x: int) : bool = x >= 0 && x <= 99;;
    contract g = (gt9 -> bet0_99) -> bet0_99;;
    let g (f: int -> int) : int = f 10;;
    g (fun (x: int) : int -> 100);;
  `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  checkContractViolation(context, 'main');
});

test('hof has a contract postcondition violation', () => {
  const context = createContext();
  const res = run(
    `
    let gt9 (x: int) : bool = x >= 9;;
    let bet0_99 (x: int) : bool = x >= 0 && x <= 99;;
    contract g = (gt9 -> bet0_99) -> bet0_99;;
    let g (f: int -> int) : int = (f 10) + 2;;
    g (fun (x: int) : int -> 98);;
  `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  checkContractViolation(context, 'g');
});

test('hof with alternate contract syntax has contract violation in its argument which is a hof', () => {
  const context = createContext();
  const res = run(
    `
    contract f1 = ({x | x > 0} -> {y | y > 1}) -> {z | z > 0};;
    let f1 (g: int -> int) : int = (g 0) - 5;;
    f1 (fun (x: int) : int -> x + 1);;
  `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  checkContractViolation(context, 'f1');
});

test("complex hof has a contract violation in its argument's argument", () => {
  const context1 = createContext();
  const res1 = run(
    `
    contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
    let f (g: int -> int) (h: int -> int) : int = (g 1) + (h 100) + 1000;;
    let id (x: int) : int = x;;
    f id id;;
  `,
    context1,
  );
  expect(res1).toEqual({
    status: 'errored',
  });
  checkContractViolation(context1, 'f');

  const context2 = createContext();
  const res2 = run(
    `
    contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
    let f (g: int -> int) (h: int -> int) : int = (g 0) + (h 101) + 1000;;
    let id (x: int) : int = x;;
    f id id;;
  `,
    context2,
  );
  expect(res2).toEqual({
    status: 'errored',
  });
  checkContractViolation(context2, 'f');
});

test("complex hof has a contract violation in its argument's return val", () => {
  const context1 = createContext();
  const res1 = run(
    `
    contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
    let f (g: int -> int) (h: int -> int) : int = (g 2) + (h 101) + 1000;;
    let id (x: int) : int = x - 1;;
    f id id;;
  `,
    context1,
  );
  expect(res1).toEqual({
    status: 'errored',
  });
  checkContractViolation(context1, 'main');

  const context2 = createContext();
  const res2 = run(
    `
    contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
    let f (g: int -> int) (h: int -> int) : int = (g 1) + (h 102) + 1000;;
    let id (x: int) : int = x - 1;;
    f id id;;
  `,
    context2,
  );
  expect(res2).toEqual({
    status: 'errored',
  });
  checkContractViolation(context2, 'main');
});

test('complex hof has a contract violation in its return val', () => {
  const context = createContext();
  const res = run(
    `
    contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
    let f (g: int -> int) (h: int -> int) : int = (g 2) + (h 101);;
    let id (x: int) : int = x;;
    f id id;;
  `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  checkContractViolation(context, 'f');
});

test('complex hof satisfies contract', () => {
  const res = runTest(
    `
    contract f = ({a | a > 0} -> {b | b > 0}) -> ({c | c > 100} -> {d | d > 100}) -> {e | e > 1000};;
    let f (g: int -> int) (h: int -> int) : int = (g 1) + (h 101) + 1000;;
    let id (x: int) : int = x;;
    f id id;;
  `,
  );
  expect(res).toEqual({
    status: 'finished',
    value: 1102,
    type: intType,
  });
});

test('hof that returns hof has a contract violation', () => {
  const context1 = createContext();
  const res1 = run(
    `
    let gt0 (x : int) : bool = x > 0;;
    contract f = gt0 -> (gt0 -> gt0);;
    let f (x: int) : (int -> int) = fun (y : int) : int -> y;;
    f 1 0;;
  `,
    context1,
  );
  expect(res1).toEqual({
    status: 'errored',
  });
  checkContractViolation(context1, 'main');
  const context2 = createContext();
  const res2 = run(
    `
    let gt0 (x : int) : bool = x > 0;;
    contract f = gt0 -> (gt0 -> gt0);;
    let f (x: int) : (int -> int) = fun (y : int) : int -> y - 1;;
    f 1 1;;
  `,
    context2,
  );
  expect(res2).toEqual({
    status: 'errored',
  });
  checkContractViolation(context2, 'f');
});
