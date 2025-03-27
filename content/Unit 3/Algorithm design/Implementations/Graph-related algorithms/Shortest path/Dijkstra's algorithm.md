A greedy algorithm where, given a source node and a weighted graph, returns the shortest path from the source to all the other vertices in the given graph. It solves the *single source shortest path problem*.
## Restrictions
- must be a [[Weighted graph|weighted graph]]
- ==edge weights must be nonnegative==
	- [[Bellman-Ford algorithm]] should be used if negative weights are present, provided there are no [[Negative weight cycle|negative weight cycles]].
## Abstract
Keep a list of all unvisited nodes and the distances from each node to the initial node. 
Repeatedly visit an unvisited node  with the shortest distance to the source node. 
Then it repeatedly attempts the process of ==**expansion**==. The algorithm checks if using the current node as an intermediary (pit stop), will result in a quicker path to it's neighbors. If it does result in a faster path, set distance to the neighbor node as the new shorter distance.

##### Expansion
For source node $O$, current node $U$, and neighbor node $V$.
If  $O\to U\to V$ faster than $O\to V$:
	set value of $O\to V$ to be the distance of $O\to U\to V$





## Performance
- Time complexity: $O(|E|\log|V|)$
## Visualisation
![[Dijkstra_Animation.gif]]
## Implementation

> [!note]- Psuedocode (VCAA)
> Logic from [2021 Exam](https://www.vcaa.vic.edu.au/Documents/exams/algorithmics/2021/2021algorithmics-report.pdf) Question 3b, syntax from 2023 Exam.
> ```
> Algorithm Dijkstras(source_node, V)
> 	set source_node as visited
> 	set all other nodes as unvisited
> 	Q ← minimum priority queue
> 	distance ← []
> 	path ← []
> 	
> 	For i in V do
> 		distance[i] ← infinity
> 		path[i] ← null
> 	Endfor
> 	
> 	distance[source_node] ← 0
> 	path[source_node] ← [source_node]
> 
> 	While Q is not empty
> 		u ← unvisited node with lowest distance
> 		set u as visited
> 		For each neighbour v of u do
> 			If distance[u] + weight(u,v) < distance[v] then
> 				distance[v] = distance[u] + weight(u,v)
> 				path[v] = path[u] with v appended
> 			Endif
> 		Endfor
> 	Endwhile
> 
> 	Return distance, path
> ```

> [!note]- Psuedocode (CHES)
> Code provided by education facility as an example. Albeit confusing without consistent convention, it is definitely more verbose compared to the VCAA psuedocode implementation and may help in understanding.
> ```json
> Algorithm Dijkstra(Input Graph G=(V,E), Input node source)
> 	// Nodes will have property .distance and .previous after algorithm
> 	set source.distance to 0 // Distance from source->source
> 	set source.previous to undefined // Previous node in optimal path
> 	create minimum priority queue UnvisitedQ
> 	
> 	for each node X in G.V do // Initialisation
> 		if X != source then 
> 			set X.distance to infinity
> 			set X.previous to undefined
> 		end if
> 		add X to UnvisitedQ // unviisted nodes - min PQ rank is X.distance
> 	end do
> 	
> 	while UnvisitedQ is not empty do
> 		U := node in UnvisitedQ with minimum distance // Greedy
> 		remove U from UnvisitedQ
> 
> 		for each neighbour V of U do // V is still in unvisitedQ
> 			newdistance := U.distance + edgeweight(U,V) 
> 			if newdistance < V.distance then // shorter path found!
> 				V.distance := newdistance
> 				V.previous := U
> 			end if
> 		end do
> 	end do
> end Algorithm
> ```

> [!note]- Python 3 (NetworkX) - Leo's Method
> ```python
> from queue import PriorityQueue
> import networkx as nx
> 
> def dijkstras(G: nx.Graph, start_node: int):
>     # Create an array for distances and initialize it to infinity for all nodes:
>     distance = {node: float("infinity") for node in G.nodes}
>     # Set the distance of the start node to 0
>     distance[start_node] = 0
> 
>     # Initialize the previous dictionary, which will be used to reconstruct the shortest paths:
>     previous = {node: None for node in G.nodes}
>     
>     # Create a priority queue to store the unvisited nodes:
>     priorityQueue = PriorityQueue()
>     # PriorityQueue class can be used as it is a minimum priority queue.
>     # Insert the start node into the priority queue:
>     priorityQueue.put(start_node)
> 
>     # Loop until priority queue is empty:
>     while priorityQueue.qsize() > 0:
>         # Extract vertex with minimum distance from priority queue:
>         current_node = priorityQueue.get()
>         
>         # Loop through all the neighbors of the current node:
>         for neighbor in G.neighbors(current_node):
>             # Calculate the new distance:
>             new_distance = distance[current_node] + G[current_node][neighbor]["weight"]
>             
>             # If the new distance is less than the distance we already have of the neighbour, update the distance.
> 	        # This means a new shortest path has been found!
>             if new_distance < distance[neighbor]:
>                 distance[neighbor] = new_distance
>                 previous[neighbor] = current_node
>                 priorityQueue.put(neighbor)
>     
>     return distance, previous
> 
> distance, previous = dijkstras(G, 1)
> ```

> [!note]- Python 3 (NetworkX) - Alex's Method
> ```python
> import networkx as nx
> 
> def dijkstra(graph: nx.Graph, start) -> dict:
>     unvisited = list(graph.nodes)
>     node_distances = {node: float('inf') for node in graph.nodes}
>     node_distances[start] = 0
>     while len(unvisited) > 0:
>         node = min(unvisited, key=lambda x: node_distances[x])
>         for i in graph.neighbors(node):
>             if i in unvisited:
>                 node_distances[i] = min(node_distances[i], node_distances[node] + graph[node][i]['weight'])
>         unvisited.remove(node)
>     return node_distances
> 
> def find_shortest_path(graph: nx.Graph, start, end) -> list:
>     node_distances = dijkstra(graph, start)
>     path = [end]
>     while path[0] != start:
>         for i in graph.neighbors(path[0]):
>             if node_distances[i] == node_distances[path[0]] - graph[path[0]][i]['weight']:
>                 path.insert(0, i)
>                 break
>     return path
> ```


## Proof

==unsure if correct please check==
#K

let $D(a,b)$ represent the shortest distance from node $a$ to node $b$ that the algorithm has found so far.
let $realD(a,b)$ represent the actual shortest distance from node $a$ to node $b$.
Let $P(n)$ be the statement that Dijkstra's gives the correct shortest path for a graph with $n$ nodes.
Let $n_{1}$ be starting node
### Prove $P(1)$
Let there be a graph with a singular node $n_{1}$
$$D(n_{1},n_{1})=0=realD(n_{1},n_{1})$$
Thus $P(1)$ is true.

### Assume $P(k)$ is True.
$$\forall x \in [1,k], D(n_1,n_x)=realD(n_1,n_x)$$
### Prove $P(k+1)$.
For graph $G$ with $k+1$ nodes, when algorithm completes up to $k$-th iteration. 
As $P(k)$ is assumed to be true:
$$\forall x \in [1,k], D(n_1,n_x)=realD(n_1,n_x)$$

If number of edges in diameter of $G$  is less than $k$ or if $n_{1}$ not one of the endpoints of the diameter; the longest possible 'shortest path' consists of less than $k$ edges. Then the shortest distances would have already been found, and would not be affected by further calculations.

Thus $P(k+1)$ is True given above condition.

However if number of edges in diameter of $G$ is $k$, and $n_1$ is one of the endpoints of this diameter, the longest 'shortest path' and the only path not found after $k$-th iterations, consists of $k$ edges and $(k+1)$ nodes.
Need to prove $P(k+1)$ for this case.

##### Prove $P(k+1)$ for the latter case:
Need to prove the algorithm can find this longest 'shortest path'.
Let $[n_{1},n_{2},n_{3},\dots,n_{k-1},n_{k},n_{k+1}]$ be a list of nodes, where $n_{1}$ is the source node, that represent the aforementioned longest possible 'shortest path' that runs along the diameter of the graph.

After the $k$-th iteration, by our assumption of $P(n)$, $D(n_1,n_x)=realD(n_1,n_x)$  for all $x \in [1,k]$.

Before the $(k+1)$-th iteration, $D(n_{1},n_{k+1}) = \infty$, and $D(n_{1},n_{k})=realD(n_{1},n_{k})$.

During the $(k+1)$-th iteration:
$$D(n_{1},n_{k+1}) := D(n_{1},n_{k+1}) + \text{weight of edge}( n_{(k+1)} \to n_{k})$$
Thus by now $D(n_{1},n_{k+1})=realD(n_{1},n_{k+1})$.


### Conclusion
As such for a graph with $k+1$ nodes, by the $(k+1)$-th iteration, all paths consisting of $k$ or less edges would have been found and computed.
$$\therefore \forall x \in [1,k+1], D(n_1,n_x)=realD(n_1,n_x)$$
$$\therefore P(k+1) \text{ is True}$$
$$\therefore \forall x \in \mathbf{N},D(n_1,n_x)=realD(n_1,n_x)$$
$$\therefore \forall n \in \mathbf{N} ,P(n) \text{ is True}$$