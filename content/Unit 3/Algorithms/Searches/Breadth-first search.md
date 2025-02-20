![[Animated_BFS.gif]]
Searches all nodes at the current depth before moving to the next depth
Worst-case performance: $O(|V|+|E|)$ where $|V|$ is the number of vertices and $|E|$ is the number of edges, $O(b^d)$ for implicit graphs with branching factor $b$ searched to depth $d$

```python
import networkx as nx
import queue

def breadth_first(tree: nx.DiGraph, search_value, value_attr: str = "value"):
    nodes = queue.Queue(len(tree.nodes))
    for i in tree.nodes:
        if len([j for j in tree.predecessors(i)]) == 0:
            next = i
            break
    if tree.nodes.data()[next][value_attr] == search_value:
        return next
    nodes.put(next)
    explored = [next]
    while nodes.qsize() != 0:
        next = nodes.get()
        print(next)
        if tree.nodes.data()[next][value_attr] == search_value:
            return next
        for node in tree.successors(next):
            if node not in explored:
                nodes.put(node)
                explored.append(node)
    return None
```