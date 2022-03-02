import { Program } from 'parser/types';

import { TypeAnnotatedNode } from './types';

export function validateAndAnnotate(
  program: Program,
): TypeAnnotatedNode<Program> {
  // TODO: Validate identifiers and determine if variable/function declarations are typable
  return program;
}
