The incidence matrix of an [[Undirected graph|undirected graph]] is a $n \times m$ matrix $B$, where $n$ and $m$ denote the number of [[Node|nodes]] and [[Node|vertices]] respectively, such that[^1]
$$
B_{{ij}}=\begin{cases}
1 & \text{if vertex } v_{1} \text{ is connected with edge } e_{j} \\
0 & \text{otherwise}
\end{cases}
$$
## Representing weights
The definition can be extended to represent [[Weighted edge|weighted edges]] within [[Weighted graph|weighted graphs]]:
$$
B_{{ij}}=\begin{cases}
\text{weight of }e_{j} & \text{if vertex } v_{1} \text{ is connected with edge } e_{j} \\
0 & \text{otherwise}
\end{cases}
$$
## Example
Given an undirected graph:
![[Pasted image 20250214195339.png]]
The incidence matrix is:
![[Pasted image 20250214195358.png]]

[^1]: https://en.wikipedia.org/wiki/Incidence_matrix