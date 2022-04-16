# OContract

Assertions as a programming language construct have great practical significance as it has been shown to be very useful in making robust software systems.
Also, as functional programming languages becomes increasingly more popular, there is a greater need for such languages to support assertion-based contracts in a higher-order world.

OContract is a spin-off of OCaml that supports higher-order contract-based assertions.
OContract also serves as a proof-of-concept of the ideas as described in the landmark paper [Contracts for Higher-Order Functions](https://users.cs.northwestern.edu/~robby/pubs/papers/ho-contracts-techreport.pdf).

## Getting Started

Follow the following steps:

```bash
git clone https://github.com/murcia-cs4215/ocontract.git
cd ocontract
yarn install
yarn start
```

This will launch an interactive shell (REPL) for you to enter OContract code line by line.

Alternatively, you can try out OContract in a code editor environment at <https://murcia-cs4215.github.io/frontend/>.

## Sample Program

Here's a example program for you to try out:

```
contract f = (positive -> positive) -> positive;;
let f (a : int -> int) : int  = a 10;;

contract h = (negative -> positive) -> positive;;
let h (b : int -> int) : int = f b;;

contract g = {x : int | positive x} -> {y : int | y > x};;
let g (a : int) : int = a + 1;;

h g;;
```

This would give you the following exception:

```
Line 8: Contract violation!
Blame: h
Contract at: Line 4, Column 0
```

Arising from the fact that `h` passed in an inappropriate function into `f`.
