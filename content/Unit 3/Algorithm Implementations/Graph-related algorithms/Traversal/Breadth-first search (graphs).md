Recall [[Breadth-first search|BFS]] for the general algorithm details.
## Differences compared to [[Breadth-first search (trees)|BFS for trees]]
- a visited array is required.
- there will not be a root node, as such, a given source node must be provided.
## Visualisation
![[breadth_first_search_1.gif|250]]
![[Pasted image 20250228102151.png|250]]
## Implementation
> [!note]- Generalised steps
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

> [!note]- Python 3 (NetworkX/matplotlib)
> ```python
> import networkx as nx
> import matplotlib.pyplot as plt
> from collections import deque
> 
> G = nx.Graph()
> G.add_edge(1, 2)
> G.add_edge(1, 3)
> G.add_edge(1, 5)
> G.add_edge(2, 3)
> G.add_edge(3, 4)
> G.add_edge(4, 7)
> G.add_edge(4, 6)
> G.add_edge(6, 7)
> G.add_edge(7, 8)
> G.add_edge(4, 5)
> 
> # explicitly set positions
> pos = {1: (0, 0), 2: (-1, 0.3), 3: (2, 0.17), 4: (4, 0.75), 5: (5, 0.03), 6: (6, 0.49), 7: (7, 0.25), 8: (8, 0.65)}
> 
> options = {
>     "font_size": 36,
>     "node_size": 3000,
>     "node_color": "white",
>     "edgecolors": "black",
>     "linewidths": 5,
>     "width": 5,
> }
> nx.draw_networkx(G, pos, **options)
> 
> # Set margins for the axes so that nodes aren't clipped
> ax = plt.gca()
> ax.margins(0.20)
> plt.axis("off")
> plt.show()
> 
> def bfs(G: nx.Graph, start: int) -> list:
>     # Initialize an empty list to keep track of visited nodes
>     visited = []
>     # Initialize a deque (double-ended queue) with the starting node
>     queue = deque([start])
> 
>     # Continue the loop as long as there are nodes in the queue
>     while queue:
>         # Remove and return the leftmost node from the queue
>         node = queue.popleft()
>         # Check if the node has not been visited
>         if node not in visited:
>             # Add the node to the visited list
>             visited.append(node)
>             # Retrieve all the neighbors of the current node
>             neighbours = G.neighbors(node)
>             # Iterate through each neighbor
>             for neighbour in neighbours:
>                 # Add each neighbor to the queue for future exploration
>                 queue.append(neighbour)
>     
>     # Return the list of visited nodes in the order they were visited
>     return visited
> 
> bfs(G, 1)
> ```