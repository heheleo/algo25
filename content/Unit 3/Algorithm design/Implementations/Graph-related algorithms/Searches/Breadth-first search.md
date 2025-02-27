![[Animated_BFS.gif]]
Searches all nodes at the current depth before moving to the next depth.
## Efficiency
- Best, average and worst-case performance: $O(|N|+|E|)$ where $|N|$ is the number of [[Node|nodes]] and $|E|$ is the number of [[Edge|edges]]
## Implementation
> [!note]- Python 3
> ```python
> import networkx as nx
> import queue
> 
> def breadth_first(tree: nx.DiGraph, search_value, value_attr: str = "value"):
>     nodes = queue.Queue(len(tree.nodes))
>     for i in tree.nodes:
>         if len([j for j in tree.predecessors(i)]) == 0:
>             next = i
>             break
>     if tree.nodes.data()[next][value_attr] == search_value:
>         return next
>     nodes.put(next)
>     explored = [next]
>     while nodes.qsize() != 0:
>         next = nodes.get()
>         if tree.nodes.data()[next][value_attr] == search_value:
>             return next
>         for node in tree.successors(next):
>             if node not in explored:
>                 nodes.put(node)
>                 explored.append(node)
>     return None
> ```