import { runTest } from '../../utils/tests';

test('string', () => {
  const res = runTest('"bro";;');
  expect(res).toEqual({
    status: 'finished',
    value: 'bro',
  });
});

test('string concatenation', () => {
  const res = runTest('"Hello " ^ "World";;');
  expect(res).toEqual({
    status: 'finished',
    value: 'Hello World',
  });
});

test('string greaterthan', () => {
  const res = runTest('"A" > "b";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('string smallerthan', () => {
  const res = runTest('"a" < "b";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('string greaterthanequals', () => {
  const res = runTest('"ABC" >= "ABC";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('string smallerthanequals', () => {
  const res = runTest('"XYZ" <= "XYZ";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('string structural equality', () => {
  let res = runTest('"hello" = "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = runTest('"hello" = "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('string structural inequality', () => {
  let res = runTest('"hello" <> "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = runTest('"hello" <> "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer physical equality', () => {
  let res = runTest('"hello" == "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = runTest('"hello" == "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer physical inequality', () => {
  let res = runTest('"hello" != "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = runTest('"hello" != "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('parenthesized expression', () => {
  const res = runTest('("abc" ^ "xyz") ^ "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: 'abcxyzhello',
  });
});
