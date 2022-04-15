import { LocalLetExpression } from 'parser/types';

import { Context } from '../../runtimeTypes';
import {
  createLocalTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment,
} from '../environment';
import { Type } from '../types';

import { typeCheck } from './index';

export function checkLocalLetExpression(
  node: LocalLetExpression,
  context: Context,
): Type {
  const localLetEnvironment = createLocalTypeEnvironment();
  pushTypeEnvironment(context, localLetEnvironment);
  typeCheck(node.left, context); // let the global bindings happen
  const type = typeCheck(node.right, context);
  popTypeEnvironment(context);
  return type;
}
