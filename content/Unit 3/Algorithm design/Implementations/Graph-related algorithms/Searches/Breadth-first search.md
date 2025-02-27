Searches all nodes at the current depth before moving to the next depth. Also known as BFS.
## Formats
Problems that require BFS can present in various formats:
- Shortest path from a set of nodes to some specific node
	- use BFS directly
- Some "obstacles" (or "bad nodes" or "bad cells") 
	- use BFS but do not include those nodes in your graph/algorithm.
- Forbidden actions (for example, you are not allowed to move from some node to another if their sum is X) 
	- use BFS but you are not going to include those edges in your graph/algorithm.
In conclusion, BFS is an extremely powerful algorithm that does not need particular tuning. Solving a problem involving it is just a matter of how you construct the graph on which you will execute BFS.
## Types
- [[Breadth-first search (trees)]]
- [[Breadth-first search (graphs)]]
## Efficiency
- Best, average and worst-case performance: $O(|N|+|E|)$ where $|N|$ is the number of [[Node|nodes]] and $|E|$ is the number of [[Edge|edges]]
## Applications
- Dijkstra's algorithm and Prim's algorithm is based on BFS.