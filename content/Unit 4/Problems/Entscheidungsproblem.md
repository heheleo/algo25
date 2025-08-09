A problem posed by David Hilbert and Wilhelm Ackermann in 1928, within [[Hilbert's Program]]. It translates to "decision problem" in German.
## Problem statement
It asks if there is an algorithm that outputs "yes" or "no" if an input statement is universally valid. 
## Proof
It was proven to be impossible by Church and Turing in 1936. Turing connects the result from the [[Halting Problem]]. He showed that you could transform the halting problem into a logical statement.

For any given Turing machine $M$ and its input, you can create a logical formula $F_{M}$ that is provable if and only if $M$ halts. If an algorithm for the Entscheidungsproblem existed, it would tell you whether $F_{M}$ is provable:
- If $F_{M}$ is provable, we know $M$ halts. 
- If $F_{M}$ is not provable, we know $M$ doesn't halt.
But this means that the Entscheidungsproblem is a solution to the [[Halting Problem]] which is impossible. Hence the Entscheidungsproblem is [[Limits of Computability#Hard Limit of Computability|undecidable]].