#TODO #A
PageRank is an algorithm used to rank web pages. PageRank outputs the probability that for any web page, a person clicking on random links in web pages will arrive at that web page. Therefore, the sum of PageRank of all web pages is equal to 1.

Python Implementation:
```python
import networkx as nx

def PageRank(graph: nx.DiGraph, d: float = 0.85) -> dict:
    prev_pagerank = {node: 0 for node in graph.nodes}
    pagerank = {node: 1/len(graph.nodes) for node in graph.nodes}
    for _ in range(10000):
        prev_pagerank = pagerank
        pagerank = {node: 0 for node in graph.nodes}
        for i in graph.nodes:
            for j in graph.predecessors(i):
                pagerank[i] += prev_pagerank[j]/len([n for n in graph.neighbors(j)])
            for j in graph.nodes:
                if len([n for n in graph.neighbors(j)]) == 0:
                    pagerank[i] += prev_pagerank[j]/len(graph.nodes)
            pagerank[i] = pagerank[i] * d + (1 - d) / len(graph.nodes)
        error = sum([abs(prev_pagerank[i] - pagerank[i]) for i in pagerank.keys()])
        if error < 1e-6:
            return pagerank
    return pagerank
```

Alternatively:
```python
import networkx as nx
import numpy as np

def PageRank(graph: nx.DiGraph, d: float = 0.85) -> dict:
    transition_matrix = np.zeros((len(graph.nodes), len(graph.nodes)))
    for i, node in enumerate(graph.nodes):
        if len([i for i in graph.successors(node)]) == 0:
            transition_matrix[:, i] = 1/len(graph.nodes)
            continue
        for j, neighbor in enumerate(graph.nodes):
            if neighbor in graph.successors(node):
                transition_matrix[j, i] = 1 / len([i for i in graph.successors(node)])
    prev_pagerank = np.zeros((len(graph.nodes), len(graph.nodes)))
    pagerank = np.matrix([[1 / len(graph.nodes)] for _ in graph.nodes])
    for _ in range(10000):
        prev_pagerank = pagerank
        pagerank = transition_matrix @ pagerank * d + (1 - d) / len(graph.nodes)
        error = np.linalg.norm(prev_pagerank - pagerank)
        if error < 1e-6:
            return {node: pagerank[i, 0] for i, node in enumerate(graph.nodes)}
    return {node: pagerank[i, 0] for i, node in enumerate(graph.nodes)}
```