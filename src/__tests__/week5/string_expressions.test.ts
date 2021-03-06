import { boolType } from 'types/utils';
import { expectString, runTest } from 'utils/tests';

test('string', () => {
  const res = runTest('"bro";;');
  expectString(res, 'bro');
});

test('string concatenation', () => {
  const res = runTest('"Hello " ^ "World";;');
  expectString(res, 'Hello World');
});

test('string greaterthan', () => {
  const res = runTest('"A" > "b";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('string smallerthan', () => {
  const res = runTest('"a" < "b";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('string greaterthanequals', () => {
  const res = runTest('"ABC" >= "ABC";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('string smallerthanequals', () => {
  const res = runTest('"XYZ" <= "XYZ";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('string structural equality', () => {
  let res = runTest('"hello" = "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
  res = runTest('"hello" = "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('string structural inequality', () => {
  let res = runTest('"hello" <> "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
  res = runTest('"hello" <> "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('integer physical equality', () => {
  let res = runTest('"hello" == "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
  res = runTest('"hello" == "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('integer physical inequality', () => {
  let res = runTest('"hello" != "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
  res = runTest('"hello" != "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('parenthesized expression', () => {
  const res = runTest('("abc" ^ "xyz") ^ "hello";;');
  expectString(res, 'abcxyzhello');
});
