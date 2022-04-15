import { floatType } from 'types/utils';
import { expectString, runTest } from 'utils/tests';

test('infinity', () => {
  const res = runTest('infinity;;');
  expect(res).toEqual({
    status: 'finished',
    value: Infinity,
    type: floatType,
  });
});

test('neg_infinity', () => {
  const res = runTest('neg_infinity;;');
  expect(res).toEqual({
    status: 'finished',
    value: -Infinity,
    type: floatType,
  });
});

test('nan', () => {
  const res = runTest('nan;;');
  expect(res).toEqual({
    status: 'finished',
    value: Number.NaN,
    type: floatType,
  });
});

test('pi', () => {
  const res = runTest('pi;;');
  expect(res).toEqual({
    status: 'finished',
    value: Math.PI,
    type: floatType,
  });
});

test('empty', () => {
  const res = runTest('empty;;');
  expectString(res, '');
});
