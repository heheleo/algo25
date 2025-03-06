## Brute-force algorithm
Checks all possible inputs for a solution. Brute-force algorithms will **always** find an optimal solution, albeit being very slow.
## Greedy algorithm
Chooses the best option in the current state at every step. Examples include [[Dijkstra's Algorithm]]. A greedy algorithm will be optimal if the problem satisfies two properties:
- **Optimal Substructure**: The optimal solution consists of optimal solutions to its subproblems
- **Greedy Choice Property**: An optimal solution can be found by choosing the locally optimal solutions. Making a locally optimal choice does not prevent finding the optimal solution.
## Divide-and-conquer
Recursively breaks down a problem into subproblems, where it then solves the subproblems, which can then be combined into a solution to the original problem. Examples include [[Merge sort|merge sort]].
## Dynamic programming
Optimises problems that can be modelled by a recurrence relation. The problems that it solves contain 2 characteristics:
- we use optimal results of subproblems to achieve the optimal result the bigger problem
- the same subproblems are solved repeatedly in different parts of the problem, allowing an optimisation called memoization or caching (reusing solutions of the subproblems)
