A [[Best-first search|best-first search]] that finds the optimal path from a start node to an end node. It combines [[Dijkstra's algorithm]] with the use of a [[Heuristic function|heuristic function]].

It does not find shortest path to other nodes, unlike Dijkstra's, only the target node. It has been proven that A* will always guarantee a shortest path from the source to the target node as long as the heuristic function is [[Heuristics#Admissible|admissible]].
## Overview
It operates by choosing the next node by choosing the node with the lowest distance from the starting node plus a heuristic function, with the heuristic function usually being an approximation of the total weight of the shortest path from this node to the end node:
- $g(n)$: the cost of moving from the current node to node $n$
- $h(n)$: [[Heuristic function|heuristic function]] that gives an estimate of the distance from node $n$ to the target node
- Let $f(n)=g(n)+h(n)$
Take the unvisited node with least $F(n)$ as next node.
## Heuristic function
- if the heuristic function is equal to zero, then it is equivalent to [[dijkstra's algorithm|Dijkstra's Algorithm]], which is still guaranteed to find a shortest path.
- the lower $h(n)$ is, the more nodes A* expands, making it slower
- when given perfect information ($h(n)$ is exactly equal to the cost from $n$ to the goal) A* will always follow the best path
- if $h(n)$ overestimates the distance from $n$ to the goal sometimes, it is not guaranteed to find a shortest path, but it can run faster
- if $h(n)$ is very high relative to $g(n)$, then it will turn into a greedy best-first search.[^1]
## Common heuristic function
- any direction of movement: Euclidean distance
- square grid with 4 directions: Manhattan distance
- square grid with 8 directions: Diagonal distance
## Implementation

> [!note]- Python 3 (NetworkX)
>  ```python
>  import networkx as nx
>
> def best_first_search(graph: nx.Graph, heuristic, start, end):
     unvisited = list(graph.nodes)
     node_distances = {node: float('inf') for node in graph.nodes}
     node_distances[start] = 0
     while len(unvisited) > 0:
         node = min(unvisited, key=lambda x: node_distances[x] + heuristic(graph, x, end))
         unvisited.remove(node)
         if node == end:
             return find_shortest_path(graph, node_distances, start, end)
         for neighbour in graph.neighbors(node):
             if neighbour in unvisited:
                 node_distances[neighbour] = min(node_distances[neighbour],  node_distances[node] + graph.edges[node, neighbour]['weight'])
    return []  
>  ```

[^1]: https://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html
