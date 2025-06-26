A parallel concept to time complexity, the space complexity of an algorithm is the total space taken by the algorithm with respect to its input size. It is denoted using [[Other Notation|Big-O notation]].

Space complexity includes both [[Auxiliary space|auxiliary space]] and space used via input.
# Examples
- if we need to create an array of size $n$, this will require $O(n)$ space
- if we create a two dimensional array of size $n*n$, this will require $O(n^{2})$ space
- recursive calls that stack also counts within space:
```python
def add(n: int) -> int {
	if n <= 0:
		return 0
	return n + add(n-1)
}

# this will cause a stack that depend on each other's values
# 1. add(4)
# 2.  -> add(3)
# 3.    -> add(2)
# ...

# Each call is added to the call stack and takes up memory
# Hence O(n) space complexity
```
- $n$ calls in total does not mean it takes $O(n)$ space:
```python
def addSequence(n: int) -> int {
	sum = 0
	for i in range(0, n):
		sum = sum + pairSum(i, i+1)
	return sum
}

def pairSum(x, y) {
	return x + y
}

# there is roughly O(n) calls to pairSum, however these calls do not depend on each other and don't stack up simultaneously, so O(1) space
```