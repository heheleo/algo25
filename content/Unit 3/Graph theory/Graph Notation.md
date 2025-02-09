---
aliases:
  - graph
  - graphs
---

An [[ADT]] which represents information through [[Node|nodes]] and [[Edge|edges]].
## Mathematical definition
### Graph
We define a simple, unlabelled graph G as a **pair** of two sets:
$$
G\stackrel{\text{def}}{=}(N,E)
$$
Where N is a set of [[Node|nodes]] and E is a set of [[Edge|edges]] between the nodes in the graph. 


### [[Node|Nodes]]
N can be defined by a set of pronumerals.
$$
N:\{A, B, C ...\}
$$
or
$$
N : \{n_{1}, n_{2}, n_{3} ....\}
$$

The total number of nodes in a graph is notated as shown.
$$
|N| = \text{ Total number of nodes in graph}
$$

### [[Edge|Edges]]
E can be defined as a set of unordered pairs $\{ {n_{1},n_{2}} \}$ where $n_{1}$ and $n_{2}$ are called the [[Edge endpoints|endpoints]] of the edge:
$$
E \subseteq \{ \{n_{1},n_{2}\} : n_{1}, n_{2} \in N \}
$$


The total number of edges in a graph is notated as shown.
$$
|E| = \text{ Total number of edges in graph}
$$

## Attributes
### Degrees
The degree of an [[Node|node]] is the number of [[Edge|edges]] it connects with.

$$
Deg( N[1] ) = \text{The degree of the node first in the set of nodes } N
$$

## Representations
### Adjacency matrix
The edges of graphs may be represented through an ajacency matrix.

[[Simple Graph|Simple graphs]] and [[Directed graph|Directed graphs]] make use of simple binary values of either 1 or 0 to indicate presense of a graph.

#TODO :  make a table

[[Weighted graphs]] however use the actual weight values of each edge as the values within the matrix.

#TODO :  make a table