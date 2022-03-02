import { SourceError } from 'errors/types';

const verboseErrors = false;

export function parseError(
  errors: SourceError[],
  verbose: boolean = verboseErrors,
): string {
  const errorMessagesArr = errors.map((error) => {
    const line = error.location ? error.location.start.line : '<unknown>';
    const column = error.location ? error.location.start.column : '<unknown>';
    const explanation = error.explain();

    if (verbose) {
      // TODO: Currently elaboration is just tagged on to a new line after the error message itself. Find a better
      // way to display it.
      const elaboration = error.elaborate();
      return `Line ${line}, Column ${column}: ${explanation}\n${elaboration}\n`;
    } else {
      return `Line ${line}, Column ${column}: ${explanation}`;
    }
  });
  return errorMessagesArr.join('\n');
}
