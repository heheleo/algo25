Complexity Classes are sets of problems that are related in complexity. The complexity classes used in Algorithmics are for decision problems (given an input, the algorithm returns yes or no depending on some statement).
## P (Polynomial Time)
P contains all decision problems that can be solved by a deterministic Turing machine in polynomial time. P is a subset of NP.


$$
T(n)=O(n^k),k \in { \mathbb{Z}^+ }
$$


## NP (Non-deterministic Polynomial Time)
NP contains all decision problems which are solvable by a non-deterministic Turing machine in polynomial time. An alternative definition is the set of decision problems where the answer can be verified in polynomial time. An unsolved question is whether P=NP, however it is generally believed that P≠NP.
## NP-Hard
NP-hard contains all decision problems where every problem in NP can be reduced to the problem in NP-Hard through a polynomial-time reduction. A reduction is a method of solving a problem by converting that problem into an instance of a second problem which has a known solution, and using that solution to solve the first problem. A polynomial-time reduction is a reduction that is bounded in polynomial time. If P≠NP, then no NP-Hard problem can be solved in polynomial time. Likewise, if a solution to any NP-Hard problem in polynomial time is found, then P=NP.
## NP-Complete
NP-Complete contains all decision problems that are NP-Hard, and are in NP. It is the intersection of NP and NP-hard.