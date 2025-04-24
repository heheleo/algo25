
The transitive closure, also known as reachability is a $|N|$ by $|N|$ matrix that denotes if it is possible to reach one node from another.
Where the row represents the source node and column represents the target node.
The values are Boolean, either 0 or 1, representing not reachable and reachable respectively.

![[Pasted image 20250327164036.png]]

Unlike adjacency matrix, the value of pairs of the same node is always 1.
One can always reach itself, but a node is not adjacent to itself.

For a completed undirected graph, all cells would be 1, as all nodes would be reachable from any other node. As such transitive closure is usually only applied to directed graphs.


There is debate on if the main diagonal should be 0 or 1.
The prevalent argument is that a node should be reachable from itself as you are already there, therefore the main diagonal should be 1 going by this argument.
