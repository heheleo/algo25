Given a weighted graph, return the shortest distances between every pair of vertices within the graph, where the graph can contain negative weights. It solves the *all-pair shortest path problem*.
## Restrictions
- must be a [[Weighted graph|weighted graph]]
	- weights can be negative
- must not contain a [[Negative weight cycle|negative weight cycle]]
## Abstract
Operates by repeatedly lowering the distance between two nodes by checking if the shortest path between and involving an intermediate node is shorter. A good explanation is contained in this [YouTube video](https://www.youtube.com/watch?v=4OQeCuLYj-4).

> [!note]- More details
> The beauty behind this algorithm relies on its algorithmic technique, namely Dynamic Programming. We assume that all the vertices has an intermediate node, and we use every single vertex as an intermediate node one by one. When we consider a vertex, say $k$, we have considered vertices from 0 to $k-1$ already. Hence, we use the shortest path built by the previous vertices to build shorter paths with $k$ included.
> 
> The loop within the algorithm can be grossly simplified: if you can get from $i$ to $k$, then from $k$ to $j$ faster than from $i$ to $j$ through any path you've found so far, then the path from $i$ to $j$ through $k$ (the intermediate) becomes the new shortest path.
## Efficiency
Time complexity: $O(n^3)$ 
## Implementation
> [!note]- Python 3 (NetworkX) - Alex's Method
> 
> ```python
> import networkx as nx
> 
> def floyd_warshall(graph: nx.DiGraph) -> list:
>     nodes_to_index = {node: i for i, node in enumerate(graph.nodes)}
>     distances = [[float('inf') for _ in range(len(graph.nodes))] for _ in range(len(graph.nodes))]
>     #set distance for directly connected nodes
>     for edge in graph.edges:
>         distances[nodes_to_index[edge[0]]][nodes_to_index[edge[1]]] = graph.edges[edge]['weight']
>     #vertices are distance zero to themselves
>     for vertex in graph.nodes:
>         distances[nodes_to_index[vertex]][nodes_to_index[vertex]] = 0
>     for k in range(len(graph.nodes)):
>         for i in range(len(graph.nodes)):
>             for j in range(len(graph.nodes)):
> 	            #repeatedly lower distance if shorter path exists
>                 distances[i][j] = min(distances[i][j], distances[i][k] + distances[k][j])
>     return distances
> ```

> [!note]- Python 3 (NetworkX) - Leo's Method - DP iterative approach
> ```python
> def floyd_warshall(graph: nx.DiGraph):
>     # Let V be the number of nodes in the graph:
>     V = graph.number_of_nodes()
>     
>     # Create a 2-dimensional distance array.
>     # This acts like an adjacency matrix. The
>     # element at distance[i][j] means the shortest
>     # distance between vertices i and j.
>     dist = [[float("inf") for _ in range(V)] for _ in range(V)]
>     
>     # Initialise the leading diagonal as 0. This is because
>     # the minimum distance from i to i is 0.
>     for i in range(V):
>         dist[i][i] = 0
>         
>     # Initialise initial distances. For each edge pair, the 
>     # initial shortest distance between them will just be 
>     # the weight.
>     for u, v, data in graph.edges(data=True):
>         dist[u][v] = data["weight"]
>     
>     for k in range(V):
>         for j in range(V):
>             for i in range(V):
>                 if dist[i][j] > dist[i][k] + dist[k][j]:
>                     dist[i][j] = dist[i][k] + dist[k][j]
>                     
>     return dist
>     
> distances = floyd_warshall(G)
> for i in range(len(distances)):
>     for j in range(len(distances)):
>         print(distances[i][j], end=" ")
>     print()
> ```

> [!note]- Python 3 (NetworkX) - Leo's Method - DP recursion/cache approach
> ```python
> from functools import cache
> 
> @cache
> def floyd_warshall_subproblem(i: int, j: int, k: int):
>     if k == 0:
>         has_direct_edge = G.has_edge(i, j)
>         return G.get_edge_data(i, j)["weight"] if has_direct_edge else float("inf")
>     
>     dist_i_to_k = floyd_warshall_subproblem(i, k, k - 1)
>     dist_k_to_j = floyd_warshall_subproblem(k, j, k - 1)
>     dist_without_k = floyd_warshall_subproblem(i, j, k - 1)
>     
>     return min(dist_without_k, dist_i_to_k + dist_k_to_j)
> 
> # Initialize a 2D array representing distance
> V = G.number_of_nodes()
> dist = [[float("inf") for _ in range(V)] for _ in range(V)]
> 
> # Iterate and populate all minimum distances
> for i in range(V):
>     for j in range(V):
>         dist[i][j] = floyd_warshall_subproblem(i, j, V - 1)
> 
> for i in range(len(dist)):
>     for j in range(len(dist)):
>         print(distances[i][j], end=" ")
>     print()
> ```