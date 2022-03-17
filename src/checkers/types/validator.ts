import { Program } from 'parser/types';

/**
 * Validates the program for the following:
 * - All identifier references are to identifiers that have already been declared/bound
 * - All identifiers are typed when first bound
 * - There are no function calls with too many arguments supplied
 * - There are no function calls where the "function" is not actually a function
 */
export function validate(program: Program): Program {
  // TODO: Validate identifiers and determine if variable/function declarations are typable
  return program;
}
