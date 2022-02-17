# Bugs to Fix

- If you enter `'xx'`, this should trigger an error since it's not a character, but it doesn't.
- If you enter `'xxxx'`, the error is instead: `Uncaught Error: Line 1: invalid syntax xx`.
- If you enter `1 + 2 3 + 4;;`, this should result in a parsing error since `2 3` is invalid, but it doesn't.
- If you enter `1 + 2;; 3 + 4;;`, this should result in two lines of output, since in OCaml REPLs, each `;;` denotes the end of one program. But it doesn't - it only outputs `3`.
