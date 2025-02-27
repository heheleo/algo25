## Brute-force algorithm
Checks all possible inputs for a solution. Brute-force algorithms will **always** find an optimal solution, albeit being very slow.
## Greedy algorithm
Chooses the best option in the current state at every step. A greedy algorithm will be optimal if the problem satisfies two properties:
- **Optimal Substructure**: The optimal solution consists of optimal solutions to its subproblems
- **Greedy Choice Property**: An optimal solution can be found by choosing the locally optimal solutions. Making a locally optimal choice does not prevent finding the optimal solution.
## Divide-and-conquer
Recursively breaks down a problem into subproblems, where it then solves the subproblems, which can then be combined into a solution to the original problem.