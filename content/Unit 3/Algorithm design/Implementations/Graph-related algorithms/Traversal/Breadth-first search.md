---
ali: BFS
---
Searches all nodes at the current depth before moving to the next depth level. Abbreviated BFS.

Layer/depth describe 'levels', the source node is labeled level 0, neighbours of the source node are labeled level 1, and so on.
## Formats
Problems that require BFS can present in various formats:
- shortest path from a set of nodes to some specific node
	- use BFS directly
- "obstacles" are present when finding the shortest distance ('bad nodes' or 'bad cells') 
	- use BFS but do not include those nodes in your graph/algorithm.
- forbidden actions (for example, you are not allowed to move from some node to another if their sum is X) 
	- use BFS but you are not going to include those edges in your graph/algorithm.
In conclusion, BFS is an extremely powerful algorithm that does not need particular tuning. Solving a problem involving it is just a matter of how you construct the graph on which you will execute BFS.
## Types
- [[Breadth-first search (trees)]]
- [[Breadth-first search (graphs)]]
## Efficiency
- Time complexity: $O(|V|+|E|)$ where $|V|$ is the number of [[Node|nodes]] and $|E|$ is the number of [[Edge|edges]]. This is because every vertex and every edge would be visited in the worst case scenario.
- Space complexity: Maximum number of vertices in output list, and maximum number of vertices in visited list is $|V|$. Hence using $O(|V|)$ space complexity.
## Applications
- Dijkstra's algorithm and Prim's algorithm is based on BFS.