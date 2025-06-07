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
## Time complexity
See [[Big-O Analysis]]