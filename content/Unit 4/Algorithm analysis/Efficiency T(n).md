Within algorithm analysis, we primarily talk about time complexity (CPU usage). We differentiate the following terms:
- performance: how much time/memory/disk/... is actually used when a program is run. This depends on the machine, compiler, etc as well as the code.
- complexity: how do the resource requirements of a program or algorithm scale. i.e. what happens as the size of the problem gets larger?
Note that complexity affects performance, but not vice versa.
## Basic operations
Time required by a function is proportional to the number of basic operations it performs. Here is a non-exhaustive list:
- arithmetic operation (e.g +, -)
- assignment (x := 0)
- comparison/test (x \=\= 0)
- a read or a write

## T(n)
Counting these basic operations in terms of n results in $T(n$), or $T_n$
Iteration, summation, telescoping, pattern.
These are often represented as a series
$$T_n=\dots T_{n+1}\dots\dots, \ T_{0}=\dots$$

eg for recursion
$$T(n)=a\cdot T(n-d)   +k, \ T_{0}=\dots$$
- a is number of recursions per increase in input lengh
- k is const actions

## Time complexity
See [[Big-O Analysis]]