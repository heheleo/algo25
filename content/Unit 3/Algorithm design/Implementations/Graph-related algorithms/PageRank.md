#TODO #A
PageRank is an algorithm used to rank web pages. PageRank was designed and is used by Google. PageRank outputs the probability that a person randomly clicking on links in web pages will arrive at a particular page, and so the sum of PageRank of all web pages is equal to 1. If the imaginary person reaches a webpage which has no outgoing links, they randomly go to any web page.

Additionally, PageRank takes into account that a person clicking links will eventually stop clicking. This probability that the person stops clicking, and then goes to another random web page is called the damping factor, represented as $d$.

The formula for the PageRank value of a node is 
$$
\text{PR}(n)=\frac{1-d}{N}+d(\sum_{u\in V_{n}}\frac{\text{PR}(u)}{\text{L}(u)})
$$
where $N$ is the total number of nodes in the graph, $V_n$ is the set of nodes in the graph that link to $n$, and $\text{L}(n)$ is the number of outgoing links of u.

The PageRank values are then repeatedly calculated until the values converge, giving the final PageRank values.

For those that have done General Maths, PageRank can be thought of as a transition matrix, repeatedly multiplying a column vector where each value is $\frac{1}{\text{node count}}$, until the steady-state matrix is found.

Python Implementation:
```python
import networkx as nx

def PageRank(graph: nx.DiGraph, d: float = 0.85, tol: float = 1e-6, max_iter: int = 10000) -> dict:
    prev_pagerank = {node: 0 for node in graph.nodes}
    pagerank = {node: 1/len(graph.nodes) for node in graph.nodes}
    for _ in range(max_iter):
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
        if error < tol:
            return pagerank
    return pagerank
```

Alternatively:
```python
import networkx as nx
import numpy as np

def PageRank(graph: nx.DiGraph, d: float = 0.85, tol: float = 1e-6, max_iter: int = 10000) -> dict:
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
    for _ in range(max_iter):
        prev_pagerank = pagerank
        pagerank = transition_matrix @ pagerank * d + (1 - d) / len(graph.nodes)
        error = np.linalg.norm(prev_pagerank - pagerank)
        if error < tol:
            return {node: float(pagerank[i, 0]) for i, node in enumerate(graph.nodes)}
    return {node: float(pagerank[i, 0]) for i, node in enumerate(graph.nodes)}
```