An [[ADT]] which represents information through [[Node|nodes]] and [[Edge|edges]].
## Mathematical definition
We define a simple, unlabelled graph G as a **pair** of two sets:
$$
G\stackrel{\text{def}}{=}(N,E)
$$
Where N is a set of [[Node|nodes]] and E is a set of [[Edge|edges]] between the nodes in the graph. E can be defined as a set of unordered pairs $\{ {n_{1},n_{2}} \}$ where $n_{1}$ and $n_{2}$ are called the [[Edge endpoints|endpoints]] of the edge:
$$
E \subseteq \{ \{n_{1},n_{2}\} : n_{1}, n_{2} \in N \}
$$