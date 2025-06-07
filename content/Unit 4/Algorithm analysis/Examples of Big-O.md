Always consider what happens when the worst case occurs.
## Constant-time: O(1)
Running time is constant and is not dependent on the size of input. This includes:
- loops that executes **a set amount** of times (including nested)
	- for example, `for i in range(10)`
- sequence of [[Efficiency#Basic operations|basic operations]]
- conditionals (if all cases take O(1))
## Common loops
- non nested loops that executes based on input size: $O(n)$
	- e.g. `for i in range(n)` 
- nested loops that only have $O(1)$ statements inside: $O(n \times m)$ 
	- e.g. `for i in range(n): for j in range(m):`
- nested loops where the inner loop stops based on $j < N$ instead of $j < M$: $O(n^{2})$
	- e.g. `for i in range(n): for j in range(n):`
## Functions and Procedure Calls
- series of functions / procedure calls: take the highest time complexity
- when a loop is applied, apply the [[Big-O Analysis#Properties|product rule]]: if a loop iterates $n$ times and the inside call has $O(n)$ complexity, then overall the loop will have complexity $O(n^2)$.
## Difficult Examples
```cpp
int x = 0;
int y = 0;
for(int i = 1; i <= n; i = i * 3) {
	x = x + 5;
	x++;
	y = y * y;
}
```

```python
x = 0
y = 0

i=1
while i<=n:
	x +=  5
	x+=1
	y *= y

	i *= 3
```

> [!note]- Answer
> Loop clearly does $O(1)$ work per iteration, so focus on how many iterations there will be. $i$ will take on values $1, 3, 9, 27, \dots, 3^k$ for some arbitrary iteration of the loop $k$. The loop stops when $i > n$. Hence, $3^k > n$, leading to the loop stopping when $k>\log_{3}n$. Therefore, the number of iterations is only $O(\log n)$.

```cpp
int y = 0;
for(int j = 1; j*j <= n; j++)
	y = y*y*50;
```


```python
y = 0

while j**2 <=n:
	y = y*y*50
	j++
```

> [!NOTE]- Answer
> Following the logic from the last answer, the loop stops when $j^2>n$, or $j > \sqrt{ n }$. Hence the time complexity is $O(\sqrt{ n })$.

```cpp
int b = 0;
for(int i = n; i > 0; i--) {
	for(int j = 0; j < i; j++) {
		b = b + 4;
	}
}
```

> [!note]- Answer
> For nested loops, you count the number of total iterations done. Hence, in this case, the inner loop will iterate $n+ n-1+ n-2+\dots+1+ 0$ times, in total $\frac{n(n+1)}{2}$  which is $O(n^{2})$.

```cpp
int y = 1;
int j = 0;
for(j = 1; j <= 2 * n; j = j + 2) 
	y = y + j;

int s = 0;
for(int i = 1; i <= j; i++)
	s++;
```

> [!note]- Answer
> First loop: note how $j=1,3,5,7,\dots,(2k+1)$ for some arbitrary $k$ in an iteration. Hence, for the loop to terminate, $2k+1>2n$ leading to $k>n-\frac{1}{2}$. Hence, the loop runs in $O(n)$ time.
> 
> Second loop: $j$ is now $2n-1$, which is still dependent on input $n$. Hence, the second loop runs in $O(n)$ time as well.
> 
> Overall $O(n)$.

```cpp
int b = 0;
for(int i = 0; i < n; i++) {
	for(int j = 0; j < i * n; j++) {
		b = b + 5;
	}
}
```

> [!note]- Answer
> Inner loop will iterate $0n+1n+2n+\dots+(n-1)n$ times, which is $n(0+1+2+\dots+(n-1))=n\left( \frac{n(n-1)}{2} \right)$. Hence, $O(n^3)$ time complexity.

```cpp
int x = 0;
for(int i = 1; i <= n; i = i * 3) {
	if (i%2 != 0) {
		for(int j = 0; j < i; j++) {
			x++;
		}
	}
 }
```

> [!note]- Answer
> Due to binary factorisation, the condition is always true, meaning the inner loop always runs. The inner loop then runs $1+3+9+\dots+3^{\log_{3}n}$ times, which is the sum of a geometric series, equal to $\frac{3^{\log_{3} n + 1}-1}{3-1}$, which gives the time complexity $O(n)$.

```cpp
int t = 0;
for(int i = 1; i <= n; i++)
   for(int j = 0; j*j < 4*n; j++)
      for(int k = 1; k*k <= 9*n; k++)
         t++;
```

> [!NOTE]- Answer
> First loop is $O(n)$, second loop is $O(\sqrt{ n })$, third loop is $O(\sqrt{ n })$. Total work done is $O(n^{2})$.

```cpp
int y = 0, s = 0;
for(int j = 0; j < n + 1; j++) {
   y=y+j;
}
for(int i = 1; i <= y; i++) {
   s++;
}
```

> [!note]- Answer
> First loop has time complexity $O(n)$, resulting in $y=\frac{n(n+1)}{2}$. Hence, second loop has time complexity $O(n^2)$, having total time complexity of $O(n^2)$. In a sequence of statements, always pick the largest time complexity.

```cpp
int i=1, z=0;
while(z < n*(n+1)/2)
{
	z+=i; i++;
}
```

> [!note]- Answer
> Intuitively you should note that the top is the sum of the series from 1 to n, whilst the bottom sums it up, making the time complexity $O(n)$

```cpp
int a = 0;
int k = n*n*n;
while(k > 1)
{
   for (int j=0; j<k; j++) { 
	   a--; 
   }
   
   k = k/2; 
}
```

> [!note]- Answer
> Don't be fooled by the division by two, count the iterations. The inner loop would have iterated $n^3+\frac{n^3}{2}+\frac{n^3}{4}+\frac{n^3}{8}+\dots=n^3+n^3\left( \frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\dots \right)\leq 2n^3$ times. Hence the time complexity is actually $O(n^{3})$.

