#TODO
The Master Theorem provides a solution to the runtime of recurrence relations of the form
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


Only works for divide and conquer

Where

$a$ is number of subproblems or sub calls per call
$\frac{n}{b}$ is the size of input each subproblem receives
$k\cdot n^c$ represents the time complexity of one recursion 
