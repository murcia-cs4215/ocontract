import { runTest } from 'utils/tests';
import { boolType, charType } from 'utils/typing';

test('character', () => {
  const res = runTest("'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: 'a',
    type: charType,
  });
});

test('character greaterthan', () => {
  const res = runTest("'a' > 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('character smallerthan', () => {
  const res = runTest("'a' < 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('character greaterthanequals', () => {
  const res = runTest("'a' >= 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('character smallerthanequals', () => {
  const res = runTest("'a' <= 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('character structural equality', () => {
  let res = runTest("'a' = 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
  res = runTest("'a' = 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('integer structural inequality', () => {
  let res = runTest("'a' <> 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
  res = runTest("'a' <> 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('integer physical equality', () => {
  let res = runTest("'a' == 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
  res = runTest("'a' == 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('integer physical inequality', () => {
  let res = runTest("'a' != 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
  res = runTest("'a' != 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});
