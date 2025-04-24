## Brute-force algorithm
Checks all possible inputs for a solution. Brute-force algorithms will **always** find an optimal solution, albeit being very slow.
## Greedy algorithm

^29d51f


Chooses the best option in the current state at every step. As it will make the best option at each step, it may end up with a less optimal solution overall.
Uses a heuristic function to decide the best option. The heuristic function is decided based on the particular real world problem context.
Examples include [[Dijkstra's algorithm]]. 
because it priorities the best options for each action individually not the best options for the entire problem. 
A greedy algorithm will be optimal and correct if the problem satisfies two properties:
- **Optimal Substructure**: The optimal solution consists of optimal solutions to its subproblems
- **Greedy Choice Property**: An optimal solution can be found by choosing the locally optimal solutions. Making a locally optimal choice does not prevent finding the optimal solution.
## Decrease-and-Conquer
Decrease and Conquer algorithms make the problem smaller by reducing the problem at each iteration. 
It differs from divide and conquer as it reduces problem size by reduction instead of division. Reduces problem by constant amount or variable amount. 
Idea is to exploit the relationship between the solution of the problem and the solution of a smaller instance of the same problem. 
Example of Decrease and Conquer is [[Depth-first search]].
## Divide-and-conquer
Recursively breaks down a problem into subproblems through division, where it then solves the subproblems, which can then be combined into a solution to the original problem. Examples include [[Merge sort|merge sort]].
## Dynamic programming
Optimizes problems that can be modelled by a recurrence relation. The problems that it solves contain 2 characteristics:
- we use optimal results of subproblems to achieve the optimal result the bigger problem
- the same subproblems are solved repeatedly in different parts of the problem, allowing an optimization called memorization or caching (reusing solutions of the subproblems)
