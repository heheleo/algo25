
The binary search algorithm is a divide and conquer algorithm that finds a value in a sorted list. Simply put, the binary search algorithm recursively checks the middle of the list if it is greater or smaller than the target value, and then splits the list in half accordingly, until it reaches the target value.
## Time complexity
Average case / worst case: $O(\log N)$
## Implementation
> [!note]- Python
> ```python
> import math
> 
> def binary_search(values: list, value) -> int:
>     left = 0
>     right = len(values)-1
>     while left <= right:
>         middle = math.floor((left + right) / 2)
>         if values[middle] < value:
>             left = middle + 1
>         elif values[middle] > value:
>             right = middle - 1
>         else:
>             return middle
>     if values[left] == value:
>         return left
>     return -1
> ```

## Proof
> [!note]- Loop Invariants
> CHES uses [[Loop invariant|loop invariants]] to prove, similar to strong induction. Let $A$ be an array, `low`, `high` be the bounds within the binary search respectively, and `target` being the item we are trying to find.
> 
> At each iteration of the while loop, note that $A[\text{low}] \leq \text{target} \leq A[\text{high}]$. We now use proof by induction to show that the loop invariant is inductive. Base case is intuitively true, as when the algorithm begins, `low` and `high` enclose all values, so the target must be in between.
> 
> The inductive hypothesis is suppose at any iteration of the loop, `low` and `high` still encloses the target value. To prove the inductive step:
> - case 1: $A[\text{mid}] > \text{target}$, then the target is between `low` and `mid`
> 	- we update `high` = `mid-1`
> - case 2: $A[\text{mid}] <\text{target}$, then the target is between `mid` and `high`
> 	- we update `low = mid+1`
> - in either case, we preserve the inductive hypothesis for the next loop
> 
> `low` and `high` will continue to change until they converge at a single location where `low = high`. By the inequality $A[\text{low}] \leq \text{target} \leq A[\text{high}]$, target is now found.
