The knapsack problem is a problem that asks "Given a set of items, each with a weight and a value, determine which items to include in the collection so that the total weight is less than or equal to a given limit and the total value is as large as possible." The 0-1 knapsack problem is a version of the knapsack problem where each item can only be added once. Mathematically put, the 0-1 knapsack problem is put as:

Given a set of items labelled 1 to $n$, where $x_i$ is the number of copies of the item, $w_i$ is the weight of the item, and $v_i$ is the value of the item, and $W$ is the weight limit of the knapsack

Maximise $$\sum_{i=1}^nv_ix_i$$
Where $$\sum_{i=1}^nw_ix_i>W\text{ and }x_i\in\{0,1\}$$

The 0-1 Knapsack problem is [[Complexity Classes#NP-Hard|NP-Hard]], and so currently there are no known polynomial-time solutions to the problem.