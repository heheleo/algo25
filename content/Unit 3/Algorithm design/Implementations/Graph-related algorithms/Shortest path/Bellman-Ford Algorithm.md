Given a source node and a weighted graph, returns the shortest path from the source to all the other vertices in the given graph, where the graph can contain negative weights. It solves the *single source shortest path with negative weights problem*.
## Restrictions
- must be a [[Weighted graph|weighted graph]]
- must not contain a [[Negative weight cycle|negative weight cycle]]
	- however, the Bellmen-Ford algorithm can detect if it does contain one!
	- minimum distance does not make sense in graphs with negative weight cycles, as one could traverse the cycle an infinite amount of times, and there would be no lower bound on the weight
## Abstract
> [!note]- Algorithm abstract
> Finds the shortest paths from a node to all other nodes in a weighted directed graph. Operates by repeatedly lowering the distances for each node if the distance of the edge plus its starting node is lower than the current distance, iterating over all edges in the graph at most $|V|-1$ times.

> [!note]- Negative cycle detection abstract
> 
> The edge-updating section repeats $|V|-1$ times because the longest possible path without negative cycles in a graph is $|V|-1$ edges long, and so all possible paths can be accounted for in the algorithm. The negative cycle section works by checking if any distances can be lowered, as if they can be, this indicates that there is a path longer than $|V|-1$ edges, and so there must be a negative cycle.
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
>     node_distances = bellmanford(graph, start)
>     path = [end]
>     while path[0] != start:
>         for i in graph.predecessors(path[0]):
>             if node_distances[i] == node_distances[path[0]] - graph.edges[i,path[0]]['weight']:
>                 path.insert(0, i)
>                 break
>     return path
> ```