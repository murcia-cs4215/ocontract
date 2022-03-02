import { runTest } from '../../utils/tests';

test('character', () => {
  const res = runTest("'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: 'a',
    type: 'char',
  });
});

test('character greaterthan', () => {
  const res = runTest("'a' > 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: 'bool',
  });
});

test('character smallerthan', () => {
  const res = runTest("'a' < 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
});

test('character greaterthanequals', () => {
  const res = runTest("'a' >= 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
});

test('character smallerthanequals', () => {
  const res = runTest("'a' <= 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
});

test('character structural equality', () => {
  let res = runTest("'a' = 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
  res = runTest("'a' = 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: 'bool',
  });
});

test('integer structural inequality', () => {
  let res = runTest("'a' <> 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: 'bool',
  });
  res = runTest("'a' <> 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
});

test('integer physical equality', () => {
  let res = runTest("'a' == 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
  res = runTest("'a' == 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: 'bool',
  });
});

test('integer physical inequality', () => {
  let res = runTest("'a' != 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: 'bool',
  });
  res = runTest("'a' != 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
});
