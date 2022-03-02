import { runTest } from '../../utils/tests';

test('float', () => {
  const res = runTest('1.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1.5,
  });
});

test('negative float', () => {
  const res = runTest('-1.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1.5,
  });
});

test('float addition', () => {
  let res = runTest('1.1 +. 2.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: 3.5,
  });
  res = runTest('1.1 +. -2.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1.5,
  });
});

test('float subtraction', () => {
  let res = runTest('10.5 -. 12.75;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2.25,
  });
  res = runTest('10.5 -. -12.75;;');
  expect(res).toEqual({
    status: 'finished',
    value: 23.25,
  });
});

test('float multiplication', () => {
  let res = runTest('2.5 *. 50.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: 126.5,
  });
  res = runTest('2.5 *. -50.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: -126.5,
  });
});

test('float division', () => {
  let res = runTest('100.45 /. 6.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: 15.6953125,
  });
  res = runTest('100.45 /. -6.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: -15.6953125,
  });
});

test('float division by 0', () => {
  const res = runTest('100.5 /. 0.0;;');
  expect(res).toEqual({
    status: 'finished',
    value: Infinity,
  });
});

test('float greaterthan', () => {
  const res = runTest('50.5 > 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('float smallerthan', () => {
  const res = runTest('49.1 < 50.2;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('float greaterthanequals', () => {
  const res = runTest('50.6 >= 50.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('float smallerthanequals', () => {
  const res = runTest('50.5 <= 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('float structural equality', () => {
  let res = runTest('50.5 = 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = runTest('49.5 = 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('float structural inequality', () => {
  let res = runTest('50.5 <> 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = runTest('49.5 <> 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('float physical equality', () => {
  let res = runTest('50.5 == 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = runTest('49.5 == 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('float physical inequality', () => {
  let res = runTest('50.5 != 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = runTest('49.5 != 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('parenthesized expression', () => {
  const res = runTest('(1.5 + 2.2);;');
  expect(res).toEqual({
    status: 'finished',
    value: 3.7,
  });
});

// test('float order of precedence', () => {
//   const res = runTest('1.5 +. 2.5 /. 2.0;;');
//   expect(res).toEqual({
//     status: 'finished',
//     value: 2,
//   });
// });
