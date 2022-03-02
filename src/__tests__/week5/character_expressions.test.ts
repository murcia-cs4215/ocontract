import { runTest } from '../../utils/tests';

test('character', () => {
  const res = runTest("'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: 'a',
  });
});

test('character greaterthan', () => {
  const res = runTest("'a' > 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('character smallerthan', () => {
  const res = runTest("'a' < 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('character greaterthanequals', () => {
  const res = runTest("'a' >= 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('character smallerthanequals', () => {
  const res = runTest("'a' <= 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('character structural equality', () => {
  let res = runTest("'a' = 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = runTest("'a' = 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer structural inequality', () => {
  let res = runTest("'a' <> 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = runTest("'a' <> 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer physical equality', () => {
  let res = runTest("'a' == 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = runTest("'a' == 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer physical inequality', () => {
  let res = runTest("'a' != 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = runTest("'a' != 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});
