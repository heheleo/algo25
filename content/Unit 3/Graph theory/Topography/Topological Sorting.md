Topological Sorting is a linear ordering of vertices such that for every directed edge $u\to v$, vertex $u$ comes before $v$ in the ordering.
Because of this there can be many potential orders for a topologically sorted graph.
- Only for **[[Directed graph|Directed]] and [[Acyclic|Acrylic]] graphs**




```python
  

def tsDFS(graph:nx.DiGraph,visitedNodes,currentNode,stack:list)->list:

    visitedNodes.append(currentNode)

    for successor in graph.successors(currentNode):

        if successor not in visitedNodes:

            tsDFS(graph,visitedNodes,successor,stack)

            stack.append(currentNode)

    stack.append(currentNode)

  

def topologicalSort(graph:nx.DiGraph) -> list:

    stack=[]

    visitedNodes=[]

    notVisitedNodes=[node for node in graph.nodes]

    for currentNode in notVisitedNodes:

        if currentNode not in visitedNodes:

            tsDFS(graph,visitedNodes,currentNode,stack)

    stack.reverse()

    return stack
```




















https://www.geeksforgeeks.org/topological-sorting/