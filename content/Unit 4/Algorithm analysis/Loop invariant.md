A predicate with the following properties:
- it is true upon entering the loop the first time
- it is true upon starting an iteration of the loop, and it remains true upon starting the next iteration
- the loop terminates, and the loop invariant plus the reason that the loop terminates gives you the property that you want
## Example
Consider the loop to sum the first `n` elements of an array `a`, where `n` is a positive integer.
```python
sum = 0
i = 0
while i < n:
	sum = sum + a[i]
	i = i + 1
```
Loop invariant: upon entering an iteration of the loop, `sum = a[0]+a[1]+...+a[n-1]`. Check the three properties:
1. Upon entering the first iteration `i=0`. The sum `a[0]+a[1]+...+a[n-1]` is empty, since `i-1=-1`. The sum of no terms is 0, hence this holds
2. Upon entering an iteration for a value of `i`, suppose that the loop invariant is true, so that `sum=a[0]+a[1]+...+a[n-1]`. The iteration adds `a[i]` into sum and increments `i`, so that the loop invariant holds entering the next iteration.
3. The loop terminates once `i=n`. According to the loop invariant, `sum=a[0]+a[1]+...+a[n-1]`. This holds - `sum` is indeed the sum of the first `n` elements of the array.
## Link to mathematical induction
The first property maps to the basis of mathematical induction, and the second property is the similar to inductive hypothesis. The third property is unique as inductive proofs do not have a termination condition.