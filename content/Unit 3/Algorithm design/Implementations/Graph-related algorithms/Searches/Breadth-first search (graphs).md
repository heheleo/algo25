Recall [[Breadth-first search|BFS]] to for the basic idea.
## Differences compared to [[Breadth-first search (trees)|BFS for trees]]
- a visited array is required.
- there will not be a root node, instead, a given source must me.
## Visualisation
![[breadth_first_search_1.gif]]
## Implementation
> [!note] Generalised steps
> 1. **Initialization:** Enqueue the given source vertex into a queue and mark it as visited. 
> 2. **Exploration**: While the queue is not empty: 
>     - Dequeue a node from the queue and visit it (e.g., print its value). 
>     - For each unvisited neighbor of the dequeued node: 
>         - Enqueue the neighbor into the queue. 
>         - Mark the neighbor as visited. 
> 3. **Termination:** Repeat step 2 until the queue is empty.

> [!note]- Python 3 (native, no NetworkX/matplotlib)
> 
> ```python
> from collections import deque
> 
> # BFS from given source s
> def bfs(adj, s):
>   
>     # Create a queue for BFS
>     q = deque()
>     
>     # Initially mark all the vertices as not visited
>     # When we push a vertex into the q, we mark it as 
>     # visited
>     visited = [False] * len(adj);
> 
>     # Mark the source node as visited and enqueue it
>     visited[s] = True
>     q.append(s)
> 
>     # Iterate over the queue
>     while q:
>       
>         # Dequeue a vertex from queue and print it
>         curr = q.popleft()
>         print(curr, end=" ")
> 
>         # Get all adjacent vertices of the dequeued 
>         # vertex. If an adjacent has not been visited, 
>         # mark it visited and enqueue it
>         for x in adj[curr]:
>             if not visited[x]:
>                 visited[x] = True
>                 q.append(x)
> 
> # Function to add an edge to the graph
> def add_edge(adj, u, v):
>     adj[u].append(v)
>     adj[v].append(u)
> 
> # Number of vertices in the graph
> V = 5
> 
> # Adjacency list representation of the graph
> adj = [[] for _ in range(V)]
> 
> # Add edges to the graph
> add_edge(adj, 0, 1)
> add_edge(adj, 0, 2)
> add_edge(adj, 1, 3)
> add_edge(adj, 1, 4)
> add_edge(adj, 2, 4)
> 
> # Perform BFS traversal starting from vertex 0
> print("BFS starting from 0: ")
> bfs(adj, 0)
> ```