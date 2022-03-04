import { createContext } from '../../context';
import { run } from '../../index';

test('unbound name', () => {
  const context = createContext();
  const res = run('x;;', context);
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe('Unbound value x');
});
