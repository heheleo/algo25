Big-O notation describes the limiting behaviour of a function as it tends towards infinity. Big-O notation is also used to describe the space and time complexity of an algorithm, giving an idea of the algorithm's performance as the input size increases. A simple definition of Big-O notation is that $f(n)=O(g(n))$ if there exists a positive number $M$ and a real number $x_0$ such that
$$
|f(n)| \leq M \space |g(n)| \text{ for all } x \geq x_0
$$
There are other, related notations given here, and are defined in a similar manner.

| Notation            | Basic Meaning                                    |
| ------------------- | ------------------------------------------------ |
| $f(n)=O(g(n))$      | $f(n)$ grows slower than $g(n)$                  |
| $f(n)=\Theta(g(n))$ | $f(n)$ grows at the same rate of $g(n)$          |
| $f(n)=\Omega(g(n))$ | $f(n)$ grows faster than $g(n)$                  |
| $f(n)=o(g(n))$      | $f(n)$ grows slower than all multiples of $g(n)$ |
| $f(n)=\omega(g(n))$ | $f(n)$ grows faster than all multiples of $g(n)$ |

## Amortized time
Amortized time instead focuses on the average time to run, rather than the worst-case performance of the algorithm. Amortized time is determined by dividing the total running time, by the number of operations and is expressed in Big-O notation. For example, if an algorithm run an arbitrary $n$ number of times runs in $O(n)$, then the amortized time is $O(n)/n=O(1)$.