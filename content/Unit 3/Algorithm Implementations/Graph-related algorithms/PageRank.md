PageRank is an algorithm used to rank web pages. PageRank outputs a probability distribution used to represent the likelihood that a person randomly clicking on links will arrive at any particular page. The underlying assumption is that more important websites are likely to receive more links from other websites.
## Properties
- sum of the PageRank value of all web pages is equal to 1
## Sink nodes
If the imaginary person reaches a webpage which has no outgoing links (sink nodes), they randomly go to any web page (implemented by adding a directed edge from sink node to all other nodes, with equal probability).
## Damping factor
PageRank takes into account that a person clicking links will eventually stop clicking. The probability, at any step, that the person will **continue following links** is the *damping factor* $d$. The probability that they instead just to any other random page is $1-d$. It is generally set around $0.85$.[^1]
## Formula
The formula for the PageRank value of a node is 
$$
\text{PR}(n)=\frac{1-d}{|N|}+d(\sum_{u\in V_{n}}\frac{\text{PR}(u)}{\text{L}(u)})
$$
Where
- $|N|$ is the total number of nodes in the graph
- $V_n$ is the set of nodes in the graph that link to $n$
- $\text{L}(u)$ is the number of outgoing links of $u$
- $d$ represents the damping factor.

The PageRank values are then repeatedly calculated until the values converge, giving the final PageRank values.

PageRank can also be described as a transition matrix, repeatedly multiplying a column vector where each value is $\frac{1}{\text{node count}}$, until the steady-state matrix is found.
## Implementation

> [!note]- Python Implementation 1
> ```python
> import networkx as nx
> 
> def PageRank(graph: nx.DiGraph, d: float = 0.85, tol: float = 1e-6, max_iter: int = 10000) -> dict:
>     prev_pagerank = {node: 0.0 for node in graph.nodes}
>     pagerank = {node: 1/len(graph.nodes) for node in graph.nodes}
>     for _ in range(max_iter):
>         prev_pagerank = pagerank
>         pagerank = {node: 0.0 for node in graph.nodes}
>         for i in graph.nodes:
>             for j in graph.predecessors(i):
>                 pagerank[i] += prev_pagerank[j]/len([n for n in graph.neighbors(j)])
>             for j in graph.nodes:
>                 if len([n for n in graph.neighbors(j)]) == 0:
>                     pagerank[i] += prev_pagerank[j]/len(graph.nodes)
>             pagerank[i] = pagerank[i] * d + (1 - d) / len(graph.nodes)
>         error = sum([abs(prev_pagerank[i] - pagerank[i]) for i in pagerank.keys()])
>         if error < tol:
>             return pagerank
>     return pagerank
> ```
> 

> [!note]- Python Implementation 2
> 
> ```python
> import networkx as nx
> import numpy as np
> 
> def PageRank(graph: nx.DiGraph, d: float = 0.85, tol: float = 1e-6, max_iter: int = 10000) -> dict:
>     transition_matrix = np.zeros((len(graph.nodes), len(graph.nodes)))
>     for i, node in enumerate(graph.nodes):
>         if len([i for i in graph.successors(node)]) == 0:
>             transition_matrix[:, i] = 1/len(graph.nodes)
>             continue
>         for j, neighbor in enumerate(graph.nodes):
>             if neighbor in graph.successors(node):
>                 transition_matrix[j, i] = 1 / len([i for i in graph.successors(node)])
>     prev_pagerank = np.zeros((len(graph.nodes), len(graph.nodes)))
>     pagerank = np.matrix([[1 / len(graph.nodes)] for _ in graph.nodes])
>     for _ in range(max_iter):
>         prev_pagerank = pagerank
>         pagerank = transition_matrix @ pagerank * d + (1 - d) / len(graph.nodes)
>         error = np.linalg.norm(prev_pagerank - pagerank)
>         if error < tol:
>             return {node: float(pagerank[i, 0]) for i, node in enumerate(graph.nodes)}
>     return {node: float(pagerank[i, 0]) for i, node in enumerate(graph.nodes)}
> ```

> [!note]- Python Implementation 3 (Wikipedia)
> ```python
> import numpy as np
> 
> def pagerank(M, d: float = 0.85):
>     """PageRank algorithm with explicit number of iterations. Returns ranking of nodes (pages) in the adjacency matrix.
> 
>     Parameters
>     ----------
>     M : numpy array
>         adjacency matrix where M_i,j represents the link from 'j' to 'i', such that for all 'j'
>         sum(i, M_i,j) = 1
>     d : float, optional
>         damping factor, by default 0.85
> 
>     Returns
>     -------
>     numpy array
>         a vector of ranks such that v_i is the i-th rank from [0, 1],
> 
>     """
>     N = M.shape[1]
>     w = np.ones(N) / N
>     M_hat = d * M
>     v = M_hat @ w + (1 - d) / N
>     while(np.linalg.norm(w - v) >= 1e-10):
>         w = v
>         v = M_hat @ w + (1 - d) / N
>     return v
> 
> # Convert NetworkX graph to adjacency matrix
> adj_matrix = nx.to_numpy_array(graph)
> # We need to transpose the matrix because the PageRank algorithm assumes that M[i, j] is the probability of going from j to i
> adj_matrix = adj_matrix.T
> # For each node, if it has outgoing links, normalize them to sum to 1
> col_sums = adj_matrix.sum(axis=0)
> for j in range(len(col_sums)):
>     if col_sums[j] > 0:
>         adj_matrix[:, j] /= col_sums[j]
>     else:  # For dangling nodes (no outgoing links)
>         adj_matrix[:, j] = 1.0 / len(adj_matrix)
> pagerank(adj_matrix, d=0.85)
> ```

[^1]: https://en.wikipedia.org/wiki/PageRank#Simplified_algorithm