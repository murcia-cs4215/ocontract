# Bugs to Fix

- `let rec` global bindings don't really work because we don't really have any operations that are supported right now.
- Need to add the following flow once explicit typing is supported:
  - First, parse the program for type declarations and add them into the type environment
  - Then, parse the program for names / function declarations, and ensure that all of them were typed + there is no reference to names before they were bound (this applies to function bodies as well)
  - We then strip the type declaration nodes from the program (OR just skip them when executing code).
  - Lastly, it is to do a round of static type checking. This includes checking that:
    - Values assigned to names are of the correct type (both variables and functions)
    - Operations and function calls are all performed on the correct types
    - Note that this checking will require the pushing and popping of type environments, especially for function bodies and local let bindings.
  - Stretch goal: to add in contract checking at this point as well.
- Once the above is done, we can potentially strip out dynamic type checking (but it's not a huge issue to keep it as well, just in case). If we want to keep the dynamic type checking, we'd want to check that the actual types = declared types + that all operations are legit.
