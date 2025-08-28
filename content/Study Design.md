# Unit 3

## AOS1 Data modelling with abstract data types
Key knowledge
- the motivation for using ADTs
	- [[Abstract data type#Motivation]]
- signature specifications of ADTs using operator names, argument types and result types
	- [[Abstract data type signature]]
- specification and uses of the following ADTs:
	- [[Unit 3/Abstract data types/Types/Set|Set]], [[List]], [[Array]], [[Dictionary]]
	- [[Stack]], [[Queue]], [[Priority queue]]
	- graphs, including undirected and directed graphs and unweighted and weighted graphs
		- [[Graph]]
- features of [[Graph|graphs]], including [[Path|paths]], [[Weighted graph#Weighted path length|weighted path lengths]], [[Cycle|cycles]] and [[Subgraph|subgraphs]]
- categories of graphs, including complete graphs, connected graphs, directed acyclic graphs and trees, and their properties
	- [[Graph#Types]]
		- [[Complete graph]]
		- [[Connected graph]]
		- [[Directed acyclic graph]]
		- [[Tree]]
- modularisation and abstraction of information representation with ADTs
- the structure of decision trees and state graphs
	- [[Decision tree]]
	- [[State diagram]]
Key skills
- explain the role of ADTs for data modelling
- read and write ADT signature specifications
- use ADTs in accordance with their specifications
- identify and describe properties of graphs
- apply ADTs to model real-world problems by selecting an appropriate ADT and justifying its suitability
- model basic network and planning problems with graphs, including the use of decision trees and state graphs
## AOS2 Algorithm design
Key knowledge
- basic structure of algorithms
- [[Pseudocode]] concepts, including variables and assignment, sequence, iteration, conditionals and functions
- programming language constructs that directly correspond to pseudocode concepts
- conditional expressions using the logical operations of AND, OR, NOT
	- [[Boolean algebra]]
- Recursion and iteration and their uses in algorithm design
- modular design of algorithms and ADTs
- characteristics and suitability of the brute-force search and greedy algorithm design patterns
- graph traversal techniques, including breadth-first search and depth-first search
	- [[Breadth-first search]], [[Depth-first search]], [[Best-first search]]
- specification, correctness and limitations of the following graph algorithms:
	- [[Prim's Algorithm]] for computing the minimal spanning tree of a graph
	- [[Dijkstra's algorithm]] and the [[Bellman-Ford algorithm]] for the single-source shortest path problem
	- the [[Floyd-Warshall algorithm]] algorithm for the all-pairs shortest path problem and its application to the [[Transitive Closure]] problem
	- the [[PageRank]] algorithm for estimating the importance of a node based on its links
- induction and contradiction as methods for demonstrating the correctness of simple iterative and recursive algorithms
	- [[Proof#Proof by Induction]], [[Proof#Proof by Contradiction]]
Key skills 
- interpret pseudocode and execute it manually on given input
- write pseudocode
- identify and describe recursive, iterative, brute-force search and greedy design patterns within algorithms
- design recursive and iterative algorithms
- design algorithms by applying the brute-force search or greedy algorithm design pattern
- write modular algorithms using ADTs and functional abstractions
- select appropriate graph algorithms and justify the choice based on their properties and limitations
- explain the correctness of the specified graph algorithms
- use search methods on decision trees and graphs to solve planning problems
- implement algorithms, including graph algorithms, as computer programs in a very high-level programming language that directly supports a graph ADT
- demonstrate the correctness of simple iterative or recursive algorithms using structured arguments  
that apply the methods of induction or contradiction
## AOS3 Applied algorithms
Key knowledge
- characteristics and applicability of ADTs and algorithm design patterns
	- [[Abstract data type|ADT]]
- suitability of ADTs and algorithm design patterns for a variety of problem contexts
- combinations of ADTs to meet complex problem requirements
- the application of algorithms to answering real-world problems
Key skills
- describe how complex information can be represented by a combination of ADTs
- select combinations of ADTs and algorithms that are fit for purpose
- justify the suitability of ADTs and algorithm design patterns for particular problems
- communicate the design of data models and algorithms
- explain the interpretation of computed solutions in terms of their meaning to the original real-world problem being solved
# Unit 4
## AOS1 Formal algorithm analysis
Key knowledge
- the concept of classifying algorithms based on their time and space complexity with respect to their input
- techniques for determining the time complexity of iterative algorithms
- the definition of [[Big-O Analysis]] and its application to the worst-case time complexity analysis of algorithms
- recurrence relations as a method of describing the time complexity of recursive algorithms
- the [[Master Theorem]] for solving recurrence relations of the form: $$
T(n)=\begin{cases}
a \cdot T\left( \frac{n}{b} \right) + kn^c & n > 1 \\
d  &  n=1
\end{cases}
$$ where $a>0, b>1, c\geq {0}, d\geq {0}, k>0$ and its solution: $$
T(n)=\begin{cases}
O(n^c) & a < b^c \\
O(n^c\log(n)) & a = b^c \\
O(n^{\log_{b}(a)}) & a > b^c
\end{cases}$$
- examples and common features of algorithms that have time complexities of $O(1), O(\log n), O(n), O(n\log n), O(n^{2}), O(n^3), O(2^n)$, and $O(n!)$.
- the concept of the P, NP, NP-Hard and NP-Complete time complexity classes for problems
	- [[Complexity Classes]]
- consequences of combinatorial explosions and indicators for them
- the feasibility of NP-Hard problems in real-world contexts

Key skills
- formally analyse the time efficiency of algorithms using Big-_O_ notation
- read off a recurrence relation for the running time of a recursive algorithm that can be solved by the Master Theorem or takes the form: $$
T(n)=\sum_{i=1}^kT(n-a_{i})+b
$$, where $a_{i} \in \mathbb{N}$
- use the stated Master Theorem to solve recurrence relations
- demonstrate how exponentially sized search and solution spaces impose practical limits on computability
- evaluate the suitability of algorithms to particular contexts based on their time or space complexity
- estimate the time complexity of an algorithm by recognising features that are common to algorithms with particular time complexities
- describe characteristics of problems in the P, NP, NP-Hard or NP-Complete time complexity classes, including the consequences for a problem’s feasibility of it belonging to one of these classes

## AOS2: Advanced algorithm design
Key knowledge
- the binary search algorithm
- divide and conquer algorithms that have linear time divide and merge steps, including [[Merge sort|merge sort]] and [[Quick sort|quick sort]]
- [[Dynamic programming]] algorithms that require no more than a single dimension array for storage, including the Fibonacci numbers and change-making problem
- tree search by backtracking and its applications
- the application of [[Heuristics]] and randomised search to overcoming the soft [[Limits of Computability|limits of computation]], including the limitations of these methods
- [[Hill climbing]] on heuristic functions, the [[A(star) Search Algorithm|A* algorithm]] and the [[Simulated Annealing|simulated annealing]] algorithm
- the [[Graph Coloring Problem]], [[0-1 Knapsack Problem]] and [[Travelling Salesman Problem (TSP)]] and heuristic methods for solving them

Key skills
- apply the divide and conquer, dynamic programming and backtracking design patterns to design algorithms and recognise their usage within given algorithms
- develop different algorithms for solving the same problem, using different algorithm design patterns, and compare their suitability for a particular application
- apply heuristics methods to design algorithms to solve computationally hard problems
- explain the application of heuristics and randomised search approaches to intractable problems, including the graph colouring, 0-1 knapsack and travelling salesman problems

## AOS3 Computer science: past and present
Key knowledge
- the historical connections between the foundational crisis of mathematics in the early 20th century and the origin of computer science, including Hilbert and Ackermann’s [[Entscheidungsproblem]] and its resolution by Church and Turing
- characteristics of a [[Turing Machine]]
- the concept of decidability and the [[Halting Problem]] as an example of an undecidable problem
- implications of undecidability for the limits of computation
- philosophical conceptions of artificial intelligence, including the [[Turing Test]], [[Weak and Strong AI]]
- [[Searle's Chinese Room Argument]], including standard responses both for and against
- the concept of [[Training with Data (Types of machine learning)|training algorithms using data]]
- the concepts of model [[overfitting and underfitting]]
- [[Support Vector Machine|Support vector machines]] (SVM) as margin-maximising linear classifiers, including:
- the geometric interpretation of applying SVM [[Binary classification|binary classification]] to one- or two-dimensional data
- the creation of a second feature from one-dimensional data to allow linear classification
- Neural Networks, including:
	- the structure of [[Multi-layer Perceptron|multilayer-perceptron neural networks]]
	- the evaluation of outputs using [[Forward Propagation]]
	- [[Model training|training neural networks]] by using iterative improvement of the edge weights to reduce the output error
	- the factors leading to a [[Resurgence in neural networks (History)|resurgence in neural networks]] in the late 20th century
- [[Ethics of AI|ethical issues]] related to artificial intelligence and data-driven algorithms, including transparency, accountability, bias and machine ethics
Key skills
- explain the historical context for the emergence of computer science as a field
- describe the general structure of a Turing machine
- demonstrate the existence of hard limits of computability using the Halting Problem
- describe and compare the Turing Test, strong AI and weak AI as conceptions of artificial intelligence
- describe the Chinese Room Argument and mount an argument for or against it
- explain, at a high level, how data-driven algorithms can learn from data
- explain the optimisation objectives for training SVM and neural network binary classifiers
- explain how higher dimensional data can be created to allow for linear classification
- describe the structure of a multi-layer perceptron neural network
- evaluate the output of a small multi-layer perceptron neural network using forward propagation
- explain the consequences of model overfitting or underfitting
- explain and discuss ethical issues related to artificial intelligence and data-driven algorithms
