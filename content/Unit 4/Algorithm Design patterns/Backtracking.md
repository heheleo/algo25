Backtracking is a general algorithm design pattern for finding all (or some) solutions to some computational problems with very large solution spaces. 

Backtracking design pattern can be said to be analogous to DFS, it depth-first explores possible solutions, and "backtracks" (abandons the solution candidate) as soon as it determines that the solution candidate cannot lead to a valid solution.


If brute force is a DFS that only traverses another path once it's reached the end of its current one; then backtracking is a smart DFS that switches to the next path immediately after it determines the goal node is no longer reachable from the current path. Of course this also means backtracking is only feasible if you can determine the reachability of the goal node, or outside of this analogy, a problem where you can determine if a valid solution can be reached from current progress.

Backtracking is an important tool for solving constraint satisfaction problems, such as crosswords, verbal arithmetic, Sudoku and other puzzles. 

Backtracking is a refinement of the brute force approach, which systematically searches for a solution to a problem among all available options. 


#TODO
The Backtracking design pattern assumes that the solutions are represented by an array (v1, ..., vm) of values limited by the given constraints of the problem, and by traversing, in a depth first manner, the domains of the possible arrays until the solutions are found. 

A backtracking algorithm starts with an empty array. At each stage it extends the partial array representing a partial solution with a new value. Upon reaching a partial array of values (v1, ..., vi) which can’t represent a partial solution within the constraints of the problem the algorithm backtracks by removing the last changed value from the array of values, and then proceeds by trying to extend the array with alternative values.