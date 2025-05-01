The A* search algorithm is a [[Best-first search]] that finds the optimal path from a start node to an end node. It operates by choosing the next node according to some heuristic function, which is likely an approximation of the cost from that node to the end node.

## Implementation

> [!note]- Python 3 (NetworkX)
>  ```python
>  import networkx as nx
>  
 def best_first_search(graph: nx.Graph, heuristic, start, end):
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
    ```
