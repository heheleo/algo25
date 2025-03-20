---
aliases:
  - DFS
---
A traversal method that prioritizes going as far as possible and then backtracks when no further path is available.
## Visualisation
![[Depth-First-Search.gif|230]]
![[Pasted image 20250228114431.png|400]]
## Efficiency
- Time complexity: $O(|V|+|E|)$ where $|V|$ is the number of [[Node|nodes]] and $|E|$ is the number of [[Edge|edges]]. This is because every vertex and every edge would be visited in the worst case scenario.
- Space complexity: Maximum number of vertices in output list, and maximum number of vertices in visited list is $|V|$. Hence using $O(|V|)$ space complexity.
## Implementation
> [!note]- Python 3 (trees)
> ```python
> import networkx as nx
> 
> def depth_first(tree: nx.DiGraph, search_value, value_attr: str = "value") -> list:
>     for node in tree.nodes:
>         if len([i for i in tree.predecessors(node)]) == 0:
>             next = node
>             break
>     if tree.nodes.data(value_attr)[next] == search_value:
>         return [next]
>     return depth_first_recursive(tree, search_value, [next])[1]
> 
> def depth_first_recursive(tree: nx.DiGraph, search_value, explored: list, value_attr: str = "value") -> bool | list:
>     node = explored[-1]
>     for next in tree.successors(node):
>         print(next, tree.nodes.data(value_attr)[next])
>         if tree.nodes.data(value_attr)[next] == search_value:
>             return (True, explored + [next])
>         next_iteration = depth_first_recursive(tree, search_value, explored + [next])
>         if next_iteration[0] == True:
>             return next_iteration
>     return (False, [])
> ```