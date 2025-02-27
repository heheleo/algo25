Worst-case time complexity: $O(log(n))$
The binary search algorithm is an algorithm that finds a value in a sorted list. Simply put, the binary search algorithm recursively checks the middle of the list if it is greater or smaller than the target value, and then splits the list in half accordingly, until it reaches the target value.

Python Implementation:
```python
import math

def binary_search(values: list, value) -> int:
    left = 0
    right = len(values)-1
    while left <= right:
        middle = math.floor((left + right) / 2)
        if values[middle] < value:
            left = middle + 1
        elif values[middle] > value:
            right = middle - 1
        else:
            return middle
    if values[left] == value:
        return left
    return -1
```