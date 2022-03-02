import { run } from '../../index';

test('character', () => {
  const res = run("'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: 'a',
  });
});

test('character greaterthan', () => {
  const res = run("'a' > 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('character smallerthan', () => {
  const res = run("'a' < 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('character greaterthanequals', () => {
  const res = run("'a' >= 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('character smallerthanequals', () => {
  const res = run("'a' <= 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('character structural equality', () => {
  let res = run("'a' = 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = run("'a' = 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer structural inequality', () => {
  let res = run("'a' <> 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = run("'a' <> 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer physical equality', () => {
  let res = run("'a' == 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = run("'a' == 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer physical inequality', () => {
  let res = run("'a' != 'a';;");
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = run("'a' != 'b';;");
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});
