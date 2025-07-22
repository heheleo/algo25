```python
def fib(n):
	if n < 2:
		return n

	return fib(n-1)+ fib(n-2)
```

$T(n) = T(n-1) + T(n-2) + 1$

as $n$ approaches infinity, $T(n-1) \approx T(n-2)$

$T(n) \approx 2\cdot T(n-1) + 1$
$T(n) \approx 2^n\cdot T(0) + (1+2+4\dots+2^n)$
$O(2^n)$

Note

$T(n-1) >T(n-2)$

$$
2\cdot T(n-1) + 1
>
T(n) >
2\cdot T(n-2) + 1

$$


---

$$
O(2^n)
$$