Complexity Classes are sets of problems that are related in complexity. The complexity classes used in Algorithmics are for decision problems (given an input, the algorithm returns yes or no depending on some statement).
## P (Polynomial Time)
P contains all decision problems that can be solved by a deterministic Turing machine in polynomial time. P is a subset of NP.

*deterministic algorithm is an algorithm that will always give the right answer*


$$
T(n)=O(n^k),k \in { \mathbb{Z}^+ }
$$

$O(2^n),O(n!),O(n^n)$ do not count as polynomial time

Remember $P \subseteq NP$

## NP (Non-deterministic Polynomial Time)
Note, does not stand for non polynomial time, but stands for P time if we were using a non deterministic Turing machine.1
NP contains all decision problems which are solvable by a non-deterministic Turing machine in polynomial time. 
Problem can be verified in polynomial time.
An alternative definition is the set of decision problems where the answer can be verified in polynomial time. An unsolved question is whether P=NP, however it is generally believed that P≠NP.
## NP-Hard
NP-hard contains all decision problems where every problem in NP can be reduced to the problem in NP-Hard through a polynomial-time reduction. 
A reduction is a method of solving a problem by converting that problem into an instance of a second problem which has a known solution, and using that solution to solve the first problem. 
A polynomial-time reduction is a reduction that is bounded in polynomial time. If P≠NP, then no NP-Hard problem can be solved in polynomial time. Likewise, if a solution to any NP-Hard problem in polynomial time is found, then P=NP.

They are as hard as NP-complete problems.
But do not necessarily belong in NP (they are not solvable by a non-deterministic Turing machine in P time).
Some are not even verifiable in P time.

Examples
- [[Travelling Salesman Problem (TSP)]] Optimisation version
- [[0-1 Knapsack Problem]] Optimisation version



## NP-Complete
NP-Complete contains all decision problems that are NP-Hard, and are in NP. It is the intersection of NP and NP-hard.
They are at least as hard as every other problem in NP, every problem in NP can be reduced to them in polynomial time. 

If any one NP-Complete problem can be solved in polynomial time, then every problem in NP can also be solved in polynomial time.


Known NP complete:
- [[Hamiltonian path]] problem
- Sudoku Problem
- 3 Colour Map problem ([[Graph coloring]])
- [[Travelling Salesman Problem (TSP)]] Decision Problem
