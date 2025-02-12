```python
import networkx as nx

def bellmanford(graph: nx.DiGraph, start) -> dict:
    node_distances = {node: float('inf') for node in graph.nodes}
    node_distances[start] = 0
    for _ in range(len(graph.edges)-1):
        for edge in graph.edges:
            if node_distances[edge[0]] + graph.edges[edge]['weight'] < node_distances[edge[1]]:
                node_distances[edge[1]] = node_distances[edge[0]] + graph.edges[edge]['weight']
    for edge in graph.edges:
        if node_distances[edge[0]] + graph.edges[edge]['weight'] < node_distances[edge[1]]:
            raise ValueError('Graph contains a negative cycle')
    return node_distances

def find_shortest_path(graph: nx.DiGraph, start, end) -> list:
    node_distances = bellmanford(graph, start)
    path = [end]
    while path[0] != start:
        for i in graph.predecessors(path[0]):
            if node_distances[i] == node_distances[path[0]] - graph.edges[i,path[0]]['weight']:
                path.insert(0, i)
                break
    return path
```