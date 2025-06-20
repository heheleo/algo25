Linear ordering of vertices such that for every directed edge $u\to v$, vertex $u$ comes before $v$ in the ordering.
## Properties
- there can be many potential orders for a topologically sorted graph.
- only applies to [[Directed graph|directed]] and [[Acyclic|acyclic]] graphs ([[Directed acyclic graph|DAG]])
	- undirected graphs contain a vertex from $u$ to $v$ and $v$ to $u$ - which creates a contradiction as both events depend on each other, meaning they both cannot appear before each other within the topological ordering.
	- cyclic graphs offer a similar contradiction, where vertices will be indirectly dependent on each other.
## Advantages
- detects cycles within a directed graph
- helps in scheduling events/tasks based on dependencies
## Implementation
```python
def tsDFS(graph: nx.DiGraph, visitedNodes, currentNode, stack:list)->list:
    visitedNodes.append(currentNode)
    for successor in graph.successors(currentNode):
        if successor not in visitedNodes:
            tsDFS(graph,visitedNodes,successor,stack)
            stack.append(currentNode)
    stack.append(currentNode)

def topologicalSort(graph: nx.DiGraph) -> list:
    stack=[]
    visitedNodes=[]
    notVisitedNodes=[node for node in graph.nodes]
    for currentNode in notVisitedNodes:
        if currentNode not in visitedNodes:
            tsDFS(graph,visitedNodes,currentNode,stack)
    stack.reverse()

    return stack
```
## Using DFS to topologically sort
- Create a graph with `n` vertices and `m`-directed edges.
- Initialise a stack and a visited array of size `n`
- For each *unvisited* vertex in the graph:
    - Call the DFS function with the vertex as the parameter.
    - In the DFS function, mark the vertex as visited and recursively call the DFS function for all *unvisited* neighbours of the vertex.
    - Once all the neighbours have been visited, push the vertex onto the stack.
- After all, vertices have been visited, pop elements from the stack and append them to the output list until the stack is empty.
- The resulting list is the topologically sorted order of the graph.

















https://www.geeksforgeeks.org/topological-sorting/