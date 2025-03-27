Given a source node and a weighted graph, returns the shortest path from the source to all the other vertices in the given graph, where the graph can contain negative weights. It solves the *single source shortest path with negative weights problem*.
## Restrictions
- must be a [[Weighted graph|weighted graph]]
- must not contain a [[Negative weight cycle|negative weight cycle]]
	- however, the Bellman-Ford algorithm can detect if it does contain one!
	- minimum distance does not make sense in graphs with negative weight cycles, as one could traverse the cycle an infinite amount of times, and there would be no lower bound on the weight
## Abstract
> [!note]- Algorithm abstract
> Operates by repeatedly lowering the distances for each node if the distance of the edge plus its starting node is lower than the current distance (we call an iteration "relaxation"), repeating this process at most $|V|-1$ times to accomodate for the longest possible path.

> [!note]- Negative cycle detection abstract
> 
> The edge-updating section repeats $|V|-1$ times because the longest possible path without negative cycles in a graph is $|V|-1$ edges long, and so all possible paths can be accounted for in the algorithm. The negative cycle section works by checking if any distances can be lowered past the $|V|-1$th iteration, and if they can be, this indicates that there is a path longer than $|V|-1$ edges, and so there must be a negative cycle.

> [!note]- Implementation details
> First, create a variable that stores one "distance" value for every node. Assign the starting node a distance of zero, this is what will refer to as the Origin or node $O$. Assign all other "distance" values to be infinite.
> 
> Each of these distances can be thought of as $O\to X$, each representing the shortest distance from the starting node $O$ to node $X$ we have already found.
> 
> There is a nested loop within Bellman-Ford Algorithm's Algorithm that consists of two 'for' loops.
> 
> The inner loop iterates over all the edges
> The process for each iteration of the inner loop is as follows: 
> Say you are iterating over an edge that goes from nodes U to V. What you are essentially trying to do is seeing if using node U as a detour can result in a shorter route from O to V.
> As such you want to compare  $O\to V$ to $(O\to U\to V)$, the latter computed by adding the current shortest distance to node $U$ found and the weight of the $U \to V$ edge. And set the lesser of the two as the new $O\to V$.
> Each time the inner loop runs, the program cements the distance for the next 1 "layer" of nodes from the centre.
> 
> The longest "shortest path" possible between two nodes consists of $|V|-1$ edges. As such as long as you run the inner loop $|V|-1$ you would have covered all edge cases.
> 
## Efficiency
- Time complexity: $O(|V||E|)$
## Implementation
> [!note]- Python 3 (NetworkX) - Alex's Method
> ```python
> import networkx as nx
> 
> def bellman_ford(graph: nx.DiGraph, start) -> dict:
>     node_distances = {node: float('inf') for node in graph.nodes}
>     node_distances[start] = 0
>     for _ in range(len(graph.edges)-1):
>         for edge in graph.edges:
>             if node_distances[edge[0]] + graph.edges[edge]['weight'] < node_distances[edge[1]]:
>                 node_distances[edge[1]] = node_distances[edge[0]] + graph.edges[edge]['weight']
>     for edge in graph.edges:
>         if node_distances[edge[0]] + graph.edges[edge]['weight'] < node_distances[edge[1]]:
>             raise ValueError('Graph contains a negative cycle')
>     return node_distances
> 
> def find_shortest_path(graph: nx.DiGraph, start, end) -> list:
>     node_distances = bellman_ford(graph, start)
>     path = [end]
>     while path[0] != start:
>         for i in graph.predecessors(path[0]):
>             if node_distances[i] == node_distances[path[0]] - graph.edges[i,path[0]]['weight']:
>                 path.insert(0, i)
>                 break
>     return path
> ```

> [!note]- Python 3 (NetworkX) - Leo's Method
> ```python
> import networkx as nx
> import matplotlib.pyplot as plt
> 
> def bellman_ford(G: nx.DiGraph, start_node: int) -> tuple[dict, bool]:
>     # Create an dictionary for distances and initialize it to infinity for all nodes:
>     distance = {node: float("infinity") for node in G.nodes}
>     # Set the distance of the start node to 0:
>     distance[start_node] = 0
>     
>     # Whether the graph has a negative cycle:
>     negativeCycle = False
>     
>     # Iterate V times, not V-1 as we need an extra iteration to detect negative cycles:
>     for i in range(G.number_of_nodes()):
>         # Iterate over all edges:
>         for u, v, data in G.edges(data=True):
>             weight = data["weight"]
>             
>             # Relax the edge:
>             if distance[u] + weight < distance[v]:
>                 # Check for negative cycles:
>                 if i == G.number_of_nodes() - 1:
>                     negativeCycle = True
>                     break
>                 
>                 distance[v] = distance[u] + weight
> 
>         if negativeCycle:
>             break
>         
>     return distance, negativeCycle
>     
> distance, negativeCycle = bellman_ford(G, 0)
> print(f"negative cycle found = {negativeCycle}")
> print(dict(sorted(distance.items())))
> ```


