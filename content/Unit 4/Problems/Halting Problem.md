A problem that asks for an arbitrary computer program and input, is it possible to determine if the program will run forever or halt?

Turing proved that the problem is [[Limits of Computability#Hard Limit of Computability|undecidable]], meaning that it is impossible to create an algorithm that will determine if an arbitrary program will halt. Turing uses Halting Problem to also prove that the [[Entscheidungsproblem]] is also undecidable.
## Proof of undecidability
The halting problem's undecidability was proved via contradiction. Assume that a program $H(P,I)$ exists, where $H$ is a program that always gives the solution to the halting problem, $P$ is the program to decide the halting program for, and $I$ is the input to $P$. Create a second program $C(X)$, where $X$ is the input program. $C(X)$ does the opposite of $H(X,X)$, i.e. if $H(X,X)$ says $X$ will halt on input $X$, then $C(X)$ will not halt.

$C(C)$ will then either not halt if $H(C,C)$ says it will halt, or halt if $H(C,C)$ says it will not halt. In either case, $H(C,C)$ is incorrect, which contradicts the initial assumption that $H$ is always correct. Therefore, there is no program $H$ that determines the solution to the halting problem for a arbitrary program and input. In this model, any input is allowed, which is why programs can be passed as input.
## Intuitive proof
Proof by contradiction. 
Assume that a Turing machine exists (as a Turing machine can model any algorithm), we call it $H$. $H$ will take a program and its input(s) and tells you correctly if it will halt. Then, Turing constructs a new Turing machine, call it $D$, that uses $H$ as a subroutine. Heres how $D$ will work:
- D takes a program as its input
- D passes this program to $H$
- If $H$ says the program will halt, $D$ will never halt.
- If $H$ says the program will not halt, $D$ will halt.
Now, what happens if you run machine $D$ on itself as an input?
- If $D$ halts, then, following the logic, it will be passed to $H$, which will say the program will halt, but then $D$ never halts.
- If $D$ never halts, then, it will be passed to $H$, which will say the program will never halt, but then $D$ halts.
This is a contradiction. 