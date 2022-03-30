import { Identifier } from 'parser/types';

import { Context } from '../../runtimeTypes';
import { getType } from '../environment';
import { Type } from '../types';

import { UnboundValueError } from './errors';

export function checkIdentifier(node: Identifier, context: Context): Type {
  const type = getType(context, node.name);
  if (type == null) {
    throw new UnboundValueError(node.name, node);
  }
  return type as Type;
}
