import { LocalLetExpression } from 'parser/types';

import { Context } from '../../runtimeTypes';
import {
  createLocalTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment,
} from '../environment';
import { Type } from '../types';

import { _typeCheck } from './index';

export function checkLocalLetExpression(
  node: LocalLetExpression,
  context: Context,
): Type {
  const localLetEnvironment = createLocalTypeEnvironment();
  pushTypeEnvironment(context, localLetEnvironment);
  _typeCheck(node.left, context); // let the global bindings happen
  const type = _typeCheck(node.right, context); // TODO: Check if we should return this type
  popTypeEnvironment(context);
  return type;
}
