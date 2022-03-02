import { run } from '../../index';

test('string', () => {
  const res = run('"bro";;');
  expect(res).toEqual({
    status: 'finished',
    value: 'bro',
  });
});

test('string concatenation', () => {
  const res = run('"Hello " ^ "World";;');
  expect(res).toEqual({
    status: 'finished',
    value: 'Hello World',
  });
});

test('string greaterthan', () => {
  const res = run('"A" > "b";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('string smallerthan', () => {
  const res = run('"a" < "b";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('string greaterthanequals', () => {
  const res = run('"ABC" >= "ABC";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('string smallerthanequals', () => {
  const res = run('"XYZ" <= "XYZ";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('string structural equality', () => {
  let res = run('"hello" = "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = run('"hello" = "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('string structural inequality', () => {
  let res = run('"hello" <> "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = run('"hello" <> "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer physical equality', () => {
  let res = run('"hello" == "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = run('"hello" == "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer physical inequality', () => {
  let res = run('"hello" != "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = run('"hello" != "goodbye";;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('parenthesized expression', () => {
  const res = run('("abc" ^ "xyz") ^ "hello";;');
  expect(res).toEqual({
    status: 'finished',
    value: 'abcxyzhello',
  });
});
