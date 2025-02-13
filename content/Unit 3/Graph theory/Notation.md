---
aliases:
  - Graph Notation
---
## [[Graph]]
We define a simple, unlabelled graph G as a **pair** of two sets:
$$
G\stackrel{\text{def}}{=}(N,E)
$$
Where N is a set of [[Node|nodes]] and E is a set of [[Edge|edges]] between the nodes in the graph. 
## [[Node|Nodes]]
N can be defined by a set of pronumerals.
$$
N=\{A, B, C ...\}
$$
or
$$
N = \{n_{1}, n_{2}, n_{3} ....\}
$$

The total number of nodes in a graph is denoted:
$$
|N| = \text{ Total number of nodes in graph}
$$
## [[Edge|Edges]]
E can be defined as a set of unordered pairs $\{ {n_{1},n_{2}} \}$ where $n_{1}$ and $n_{2}$ are called the [[Edge endpoints|endpoints]] of the edge:
$$
E \subseteq \{ \{n_{1},n_{2}\} : n_{1}, n_{2} \in N \}
$$
The total number of edges in a graph is denoted:
$$
|E| = \text{ Total number of edges in graph}
$$
## [[Degree]]
The degree of a node with 1-based index $i$ in the set of all nodes $N$ is denoted:
$$
Deg( N[i] ) = \text{The degree of the i-th node in the set of all nodes }
$$


## Adjacency matrix
The edges of graphs may be represented through an adjacency matrix.

[[Simple Graph|Simple graphs]] and [[Directed graph|Directed graphs]] make use of simple binary values of either 1 or 0 to indicate presence of a graph.

In a simple graph, the information is mirrored across the diagonal, because in a undirected graph, A-B connection is the same as B-A connection.
Adjacency of simple graph:

|     |  A  |  B  |  C  |  D  |
| :-: | :-: | :-: | :-: | :-: |
|  A  |  0  |  1  |  0  |  0  |
|  B  |  1  |  0  |  1  |  1  |
|  C  |  0  |  1  |  0  |  1  |
|  D  |  0  |  1  |  1  |  0  |

However in a directed graph, this is not the case, because direction matters.
By convention, the rows define the source node, and the columns define the target node.
See [[Directed edge]]

| Adjacency Matrix |     |             |     |     |     |
| ---------------- | :-: | :---------: | :-: | :-: | :-: |
|                  |     | Target node |     |     |     |
|                  |     |      A      |  B  |  C  |  D  |
| Source           |  A  |      0      |  0  |  0  |  0  |
| node             |  B  |      1      |  0  |  1  |  0  |
|                  |  C  |      0      |  0  |  0  |  1  |
|                  |  D  |      0      |  1  |  0  |  0  |

![[directedGraph1.png]]