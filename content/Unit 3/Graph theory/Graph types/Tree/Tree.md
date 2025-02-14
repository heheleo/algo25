An [[Undirected graph|undirected graph]] in which any two distinct [[Node|nodes]] are connected by exactly one [[Path|path]].
## Properties
- [[Simple graph|simple]]
- [[Connected graph|connected]]
- no [[Circuit|circuits]]
## Number of edges
The number of edges will always be one less than the number of [[Node|nodes]].
$$
n(E)=n(N)-1
$$
>[!proof]
>Proof by mathematical induction. Let $P(n)$ be the proposition such that a tree with $n$ nodes will satisfy $e=n-1$, where $e$ denotes the number of edges, and $n$ denotes the number of nodes.
>
>**Base case**: since there is only one node, there will be 0 edges as there is no other node to connect to. As a result, $P(1)$ holds.
>**Inductive hypothesis**: assume $P(k)$ is true, for all $k \in \mathbb{N}$.
>**To show**: $P(k+1)$ is true.
>In a tree with $k+1$ nodes, the number of edges must be equal to the number of edges connecting $k$ nodes plus the number of edges connecting the $(k+1)$th node.
>As the number of edges required to connect two nodes must be 1, the number of edges in a tree with $k+1$ nodes is equal to the number of edges in a tree with $k$ nodes plus 1.
>That is, 
>$$\begin{split} e &=\text{n(edges of tree with k nodes)}+1 \\ &=(k-1)+1 \\&=k \end{split}$$
>Substituting $e=k$ into $e=n-1$ gets $k=(k+1)-1$ which is true. Hence, we have shown that $P(k+1)$ is true.
>By the principle of mathematical induction, a tree with $e$ edges and $n$ nodes must satisfy the relation $e=n-1$.