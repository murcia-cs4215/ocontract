import { run } from '../../index';

test('float', () => {
  const res = run('1.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1.5,
  });
});

test('negative float', () => {
  const res = run('-1.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1.5,
  });
});

test('float addition', () => {
  let res = run('1.1 +. 2.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: 3.5,
  });
  res = run('1.1 +. -2.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1.5,
  });
});

test('float subtraction', () => {
  let res = run('10.5 -. 12.75;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2.25,
  });
  res = run('10.5 -. -12.75;;');
  expect(res).toEqual({
    status: 'finished',
    value: 23.25,
  });
});

test('float multiplication', () => {
  let res = run('2.5 *. 50.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: 126.5,
  });
  res = run('2.5 *. -50.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: -126.5,
  });
});

test('float division', () => {
  let res = run('100.45 /. 6.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: 15.6953125,
  });
  res = run('100.45 /. -6.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: -15.6953125,
  });
});

test('float division by 0', () => {
  const res = run('100.5 /. 0.0;;');
  expect(res).toEqual({
    status: 'finished',
    value: Infinity,
  });
});

test('float greaterthan', () => {
  const res = run('50.5 > 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('float smallerthan', () => {
  const res = run('49.1 < 50.2;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('float greaterthanequals', () => {
  const res = run('50.6 >= 50.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('float smallerthanequals', () => {
  const res = run('50.5 <= 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('float structural equality', () => {
  let res = run('50.5 = 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = run('49.5 = 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('float structural inequality', () => {
  let res = run('50.5 <> 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = run('49.5 <> 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('float physical equality', () => {
  let res = run('50.5 == 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = run('49.5 == 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('float physical inequality', () => {
  let res = run('50.5 != 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = run('49.5 != 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('parenthesized expression', () => {
  const res = run('(1.5 + 2.2);;');
  expect(res).toEqual({
    status: 'finished',
    value: 3.7,
  });
});

// test('float order of precedence', () => {
//   const res = run('1.5 +. 2.5 /. 2.0;;');
//   expect(res).toEqual({
//     status: 'finished',
//     value: 2,
//   });
// });
