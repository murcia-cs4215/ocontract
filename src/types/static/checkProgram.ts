import { Program } from 'parser/types';
import { unitType } from 'types/utils';

import { Context } from '../../runtimeTypes';
import { Type } from '../types';

import { typeCheck } from './index';

export function checkProgram(node: Program, context: Context): Type {
  let programType: Type = unitType;
  for (const body of node.body) {
    programType = typeCheck(body, context);
  }
  return programType;
}
