The Master Theorem provides a solution to the [[Big-O Analysis|time complexity]] of recurrence relations of the form
$$
T(n)= \begin{cases}
aT(\frac{n}{b})+kn^c &\text{if }\space n>1 \\
d &\text{if }\space n=1
\end{cases}
\qquad \text{where}\space a>0,b>1,c\geq0,d\geq0,k>0 
$$
where the solution is
$$
T(n)= \begin{cases}
O(n^c) &\text{if }\space a<b^c \\
O(n^c\space log\space n) &\text{if } \space a=b^c \\
O(n^{log_b(a)}) &\text{if }\space a>b^c
\end{cases}
$$
## Recurrence relation
The recurrence relation describes an algorithm that divides a problem of size $n$ into $a$ subproblems, each of size $\frac{n}{b}$, and solves them recursively. (Note that $\frac{n}{b}$ may not be an integer, but it is proven that replacing $T(n/b)$ with $T(\lfloor n / b \rfloor)$ or $T(\lceil n / b \rceil)$ does not affect the asymptotic behaviour)
