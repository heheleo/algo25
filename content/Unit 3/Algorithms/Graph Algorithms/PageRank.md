PageRank is an algorithm used to rank web pages. PageRank outputs the probability that for any web page, a person clicking on random links in web pages will arrive at that web page. Therefore, the sum of PageRank of all web pages is equal to 1.

Python Implementation
```python
import networkx as nx
import numpy as np

def PageRank(graph: nx.DiGraph, d: float = 0.85) -> dict:
    transition_matrix = np.zeros((len(graph.nodes), len(graph.nodes)))
    for i, node in enumerate(graph.nodes):
        for j, neighbor in enumerate(graph.nodes):
            if neighbor in graph.successors(node):
                transition_matrix[j, i] = 1 / len([i for i in graph.successors(node)])
    pagerank = np.matrix([[1 / len(graph.nodes)] for _ in graph.nodes])
    for _ in range(10000):
        pagerank = transition_matrix @ pagerank * d + (1 - d) / len(graph.nodes)
    return {node: pagerank[i, 0] for i, node in enumerate(graph.nodes)}
```