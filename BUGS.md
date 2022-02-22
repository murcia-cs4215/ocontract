# Bugs to Fix

- If you enter `1 + 2 3 + 4;;`, the error is `Line 1: invalid syntax missing ';;' at '3'` - should it be `at '2'` instead.
- If you enter `"hello" == "hello"`, this should return `false` since two strings do not have the same identity, but we can't enforce this check currently without constructing wrapper objects.
- If you enter `'x'` without a terminating `;;`, it gives this incorrect line number in the error: `Uncaught Error: Line 2: invalid syntax missing ';;' at '<EOF>'`
- `-1;;` throws `Error: Line 1: invalid syntax extraneous input '-' expecting {<EOF>, '(', 'not', NUMBER, CHAR, STRING, FLOAT, BOOLEAN, 'if'}`
