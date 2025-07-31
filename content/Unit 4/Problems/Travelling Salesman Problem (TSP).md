The travelling salesman problem is a problem that asks "Given a set of cities, and the distances between each pair of cities, what is the shortest possible route that visits every city once and returns to the starting city?". In terms of graphs, the travelling salesman asks for a [[Hamiltonian cycle]] of a complete weighted graph with the lowest possible weight. The nodes represent the cities, and the edge weights the distance between cities.
## Complexity Class
The travelling salesman problem is [[Complexity Classes#NP-Hard|NP-Hard]], thereby having no currently known polynomial-time solutions to the problem.

# Approaches
## Brute force
Via brute force, the number of different tours through $n$ cities is[^1] 
$$
\frac{(n-1)!}{2}
$$

[^1]: https://www.math.uwaterloo.ca/tsp/problem/pcb3cnt.html


## Other

- Brute Force
- [[Hill climbing]]
- [[Simulated Annealing]]
- Genetic algorithms (for interests only)

## Genetic Algorithm (for interests only)

# Problem Varients
## TSP: Optimisation

Finds the shortest path.

## TSP: Decision
Given a set of cities and distances, and a target distance D, is there a tour of all cities that has a total distance less than or equal to D?
