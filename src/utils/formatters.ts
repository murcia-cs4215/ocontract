import { Finished } from '../types';

export function formatFinishedForRepl(result: Finished): string {
  if (result.type === 'unit') {
    return '';
  }
  if (result.type === 'float' && Math.floor(result.value) === result.value) {
    result.value = `${result.value}.`;
  }
  return `- : ${result.type} = ${result.value}`;
}
