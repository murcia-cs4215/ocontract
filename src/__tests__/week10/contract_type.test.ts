import { intType, makeFunctionType } from 'types/utils';
import { runTest } from 'utils/tests';

test('contract declarations have type and name', () => {
  const res = runTest('contract f = {x : int | x > 10};;');
  expect(res).toMatchObject({
    status: 'finished',
    type: intType,
    name: 'f',
  });
});

test('contract declarations with function types', () => {
  const res = runTest('contract f = {x : int | x > 10} -> {y : int | y > x};;');
  expect(res).toMatchObject({
    status: 'finished',
    type: makeFunctionType(intType, intType),
    name: 'f',
  });
});

test('contract declarations with hof', () => {
  const res = runTest(
    'contract f = ({x : int | x > 10} -> {y : int | y > x}) -> {z : int | true};;',
  );
  expect(res).toMatchObject({
    status: 'finished',
    type: makeFunctionType(makeFunctionType(intType, intType), intType),
    name: 'f',
  });
});
