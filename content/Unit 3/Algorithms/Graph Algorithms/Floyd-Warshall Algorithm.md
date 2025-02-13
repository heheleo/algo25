#TODO #A
Python Implementation:
```python
import networkx as nx

def floyd_warshall(graph: nx.DiGraph) -> list:
    nodes_to_index = {node: i for i, node in enumerate(graph.nodes)}
    distances = [[float('inf') for _ in range(len(graph.nodes))] for _ in range(len(graph.nodes))]
    #set distance for directly connected nodes
    for edge in graph.edges:
        distances[nodes_to_index[edge[0]]][nodes_to_index[edge[1]]] = graph.edges[edge]['weight']
    #vertices are distance zero to themselves
    for vertex in graph.nodes:
        distances[nodes_to_index[vertex]][nodes_to_index[vertex]] = 0
    for k in range(len(graph.nodes)):
        for i in range(len(graph.nodes)):
            for j in range(len(graph.nodes)):
	            #repeatedly lower distance if shorter path exists
                distances[i][j] = min(distances[i][j], distances[i][k] + distances[k][j])
    return distances
```