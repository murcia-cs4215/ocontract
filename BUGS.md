# Bugs to Fix

- If you enter `1 + 2 3 + 4;;`, the error is `Line 1: invalid syntax missing ';;' at '3'` - should it be `at '2'` instead.
- `let rec` global bindings don't really work because we don't really have any operations that are supported right now.
