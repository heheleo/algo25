
Proofs are a convincing demonstration
In algorithm it often consists of deductive reasoning rather than empirical arguments.
Proofs are often used to prove an algorithm will work for some or all cases.

![[Pasted image 20250501171227.png|300]]


## Types of proofs

There are two main methods of proofs used for VCE Algorithms.
#### Proof by Induction
First, prove the first case. 
Then assume that the $k$th case is true.
Prove the $(k+1)$th case
#### Proof by Contradiction
Create a conjecture that is the opposite of what you are trying to prove.
Prove that such a conjecture cannot be true as it creates contradictions.
As such the original proposal must be true.'

If $P$ is the statement that $A \implies B$
$P'$ states that $A$ is true **and** $B$ is false ($P': A \land B'$)
(De Morgan's laws)

Thus show that if one assumes $A$ is true and $B$ is false, they will arrive at a contradiction.

Loop invariance is **a condition that is true at the beginning and end of every iteration of a loop**.
Can be used in proofs.?
Case $P(k-1)$ is correct, show $P(k)$?
## Proof Examples

#### Induction

See proof of correctness for:
- [[Dijkstra's algorithm]]
- [[Floyd-Warshall algorithm]]
- [[Bellman-Ford algorithm]] (to be completed)

#### Contradiction
- [[Pigeon hole principle]]
- [[DAG source]] (to be completed)
