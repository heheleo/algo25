
## Graph coloring
Graph coloring, is the processing of assigning colors to each node of a graph, where each node should have a color, and no adjacent nodes are assigned the same color.

This is similar to giving nodes "weights", but in this case giving each node a specific color.
Node coloring is often used in models that deal with conflict resolution (resolving a graph so that there are no conflict/overlap).
For example, graph coloring techniques can be applied to assigning frequencies to radio stations, scheduling club meetings, and coloring the countries of a map. 

![[Pasted image 20250306164742.png]]

Attributes
- A **$k$-coloring** of graph G is a coloring of G using $k$ colors.
- The **chromatic number** of a graph G is the minimum value $k$ for which a $k$-coloring of G exists.

## Conflict modeling
Coloring can also model conflicts. Where you would color conflicting nodes the same color, thus representing that they should not be next to each other.

E.g.: For the table, A-B are conflicting and cannot be next to each other, thus should both be colored the same color.

|     | A   | B   | C   | D   | E   |
| --- | --- | --- | --- | --- | --- |
| A   |     | X   |     | X   | X   |
| B   | X   |     | X   |     | X   |
| C   |     | X   |     | X   |     |
| D   | X   |     | X   |     |     |
| E   | X   | X   |     |     |     |