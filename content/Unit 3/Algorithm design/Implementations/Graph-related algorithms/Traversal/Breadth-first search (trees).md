Recall [[Breadth-first search|BFS]] to for the basic idea. 
## Differences compared to [[Breadth-first search (graphs)|BFS for graphs]]
- no visited array is needed, as you can ensure that every node visited is an non-visited node.
	- this is because within a [[Tree|tree]], two distinct nodes will only have one path between them.
## Visualisation
![[Animated_BFS.gif]]
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