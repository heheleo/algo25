The knapsack problem is a problem that asks "Given a set of items, each with a weight and a value, determine which items to include in the collection so that the total weight is less than or equal to a given limit and the total value is as large as possible." The 0-1 knapsack problem is a version of the knapsack problem where each item can only be added once. 
## Mathematical Representation
Mathematically put, the 0-1 knapsack problem is:
Given a set of items labelled 1 to $n$, where $x_i$ is the number of copies of the item, $w_i$ is the weight of the item, and $v_i$ is the value of the item, and $W$ is the weight limit of the knapsack,
$$
\text{Maximise }\sum_{i=1}^nv_ix_i\text{ where }\sum_{i=1}^nw_ix_i\leq W\text{ and }x_i\in\{0,1\}
$$
## Complexity Class
The 0-1 knapsack problem is [[Complexity Classes#NP-Hard|NP-Hard]], and so currently there are no known polynomial-time solutions to the problem. The decision problem version of the 0-1 knapsack problem asks "Given a set of items, each with a weight and a value, is there a set of items below a total weight that has a total value above $N$?", and is [[Complexity Classes#NP-Complete|NP-Complete]]
## Solutions
- Brute force yields $O(2^n)$ time complexity.
- Dynamic programming yields the optimal solution in $O(nW)$ time, where $n$ is the number of items and $W$ is the backpack capacity.

> [!note]- Solver for the Knapsack problem (Dynamic Programming)
> ```python
> def knapsack(weights, values, capacity):
>    results = [0 for _ in range(capacity)]
>
 >   for i in range(len(weights)):
>        if results[i] != 0:
>            results[weights[i]-1] = max(values[i], results[weights[i]-1])
>        else:
>            results[weights[i]-1] = values[i]
>
>    for i in range(capacity):
>        choices=[]
>        choices.append(results[i])
>        for j in range(len(weights)):
>            if i-weights[j] >= 0:
>                choices.append(results[i-weights[j]]+values[j])
>        results[i] = max(choices)
>
>    return results
> ```

> [!note]- Solver for the 0-1 Knapsack problem (Dynamic Programming)
> ```python
> def knapsack01(weights, values, capacity):
>    results = [[0 for _ in range(capacity+1)] for _ in range(len(weights)+1)]
>    
>    for i in range(1,len(weights)+1):
>        for j in range(1,capacity+1):
>            if weights[i-1] <= j:
>                results[i][j] = max(results[i-1][j], results[i-1][j-weights[i-1]] + values[i-1])
>            else:
>                results[i][j] = results[i-1][j]
>    return results
> ```
