import assert from 'assert';

import {
  charType,
  floatType,
  intType,
  makeFunctionType,
  stringType,
} from 'types/utils';
import { getStaticTypeErrorMessage, runTest } from 'utils/tests';

import { createContext } from '../../context';
import { run } from '../../index';

test('function with arguments of correct types', () => {
  let res = runTest(
    `
    let f (x : int) : int = x + 10;;
    f 20;;
    `,
  );
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
  res = runTest(
    `
    let sum (a : float) (b : float) : float = a +. b;;
    sum 20.5 2.5;;
    `,
  );
  expect(res).toEqual({
    status: 'finished',
    value: 23,
    type: floatType,
  });
});

test('function with invalid body given parameter types', () => {
  const context = createContext();
  const res = run(
    `
    let f (x : int) : int = x *. 2.0;;
    `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe(
    getStaticTypeErrorMessage(floatType, intType),
  );
});

test('function with invalid body given return type', () => {
  const context = createContext();
  const res = run(
    `
    let f (x : float) : int = x *. 2.0;;
    `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe(
    getStaticTypeErrorMessage(intType, floatType),
  );
});

test('function with arguments of incorrect type', () => {
  const context = createContext();
  let res = run(
    `
    let f (x : string) : string = x ^ "world";;
    f 'h';;
    `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe(
    getStaticTypeErrorMessage(stringType, charType),
  );
  context.errors = [];
  res = run(
    `
    let f (x : string) (y : string) : string = x ^ y;;
    f "hello" 123;;
    `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe(
    getStaticTypeErrorMessage(stringType, intType),
  );
});

test('function with hof arguments of right type', () => {
  let res = runTest(
    `
    let f (x : int -> int) : int = x 10;;
    f (fun (a : int) : int -> a + 20);;
    `,
  );
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
  res = runTest(
    `
    let sum (a : float) (b : float) : float = a +. b;;
    let divide (a : float) (b : float) : float = a /. b;;
    let x (f : float -> float -> float) (g : float -> float -> float) (a : float) (b : float) : float = g (f a b) b;;
    let y : float -> float -> float = x sum divide;;
    y 15.0 30.0;;
    `,
  );
  expect(res).toEqual({
    status: 'finished',
    value: 1.5,
    type: floatType,
  });
});

test('function with invalid body given hof types', () => {
  const context = createContext();
  let res = run(
    `
    let f (x : int -> int) : int = x 2.0;;
    `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe(
    getStaticTypeErrorMessage(intType, floatType),
  );
  context.errors = [];
  res = run(
    `
    let f (x : int -> int) (y : float -> int) : int = y (x 2);;
    `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe(
    getStaticTypeErrorMessage(floatType, intType),
  );
  context.errors = [];
  res = run(
    `
    let f (x : int -> int) (y : float -> int) : float = x (y 2.0);;
    `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe(
    getStaticTypeErrorMessage(floatType, intType),
  );
});

test('function with hof arguments of incorrect type', () => {
  const context = createContext();
  let res = run(
    `
    let f (x : string -> string) : string = x "world";;
    f (fun (a : string) : int -> 10);;
    `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe(
    getStaticTypeErrorMessage(
      makeFunctionType(stringType, stringType),
      makeFunctionType(stringType, intType),
    ),
  );
  context.errors = [];
  res = run(
    `
    let f (x : int -> int) : int = x 20;;
    let y (x : int) : int -> int -> int = fun (a : int) (b : int) : int -> a + b + x;;
    f (y 20);;
    `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe(
    getStaticTypeErrorMessage(
      makeFunctionType(intType, intType),
      makeFunctionType(intType, intType, intType),
    ),
  );
});

test('function currying with correct type', () => {
  const res = runTest(
    `
    let f (x : int) (y : int) : int = x + y;;
    let g : int -> int = f 20;;
    `,
  );
  expect(res.status).toBe('finished');
  assert('type' in res);
  expect(res.type).toEqual(makeFunctionType(intType, intType));
  expect(res.name).toBe('g');
});

test('function currying with incorrect type', () => {
  const context = createContext();
  const res = run(
    `
    let f (x : int) (y : int) : int = x + y;;
    let g : int = f 20;;
    `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe(
    getStaticTypeErrorMessage(intType, makeFunctionType(intType, intType)),
  );
});
