![[Depth-First-Search.gif]]
Searches along branches as far as it can go before backtracking.
## Efficiency
- Best, average and worst-case performance: $O(|N|+|E|)$ where $|N|$ is the number of [[Node|nodes]] and $|E|$ is the number of [[Edge|edges]]
## Implementation
> [!note]- Python 3
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