Return the route used to reach a target end node.
## Implementation
This is implemented on the basis of a graph traversal algorithm (commonly [[Breadth-first search|BFS]]/[[Depth-first search|DFS]]), or a shortest distance algorithm (such as [[Dijkstra's algorithm]]), but using an extra variable to track the paths. Examples of two such implementations are listed below.

> [!note] Dictionary of lists (intuitive)
> Construct a dictionary `paths` where the key represents a node $n$ within the graph, and `paths[n]` represents the shortest path from the start node to node `n`. You are responsible for updating the dictionary within the algorithm.

> [!note] Dictionary of numbers (Dijkstras)
> This approach is harder to understand but easier to implement.
> 
> Construct a dictionary `previous` where a key $n$ represents a node within the graph, and the corresponding value represents the previous node on the shortest path from the start node to node $n$.
> 
> Intuitive example: `previous[5]=2` means:
> - the previous node of 5 is 2
> - within the shortest path, it will always include $2\to 5$.
> 
> We calculate the shortest path through a process called *reconstruction*. We follow the `previous` values backwards, from the end node back to  the start node.
> 
> For example, to reconstruct the path from node `0` to node `7`: (made up values are used)
> - `previous[7]=4` - shortest path: $4\to 7$
> - `previous[4]=2` - shortest path: $2 \to 4 \to 7$
> - `previous[2]=0` - shortest path: $0 \to 2 \to 4 \to 7$
> Start node `0` is reached, hence the shortest path is $0\to 2  \to 4 \to 7$. 
> 
> This is extremely easy to implement, especially within Dijkstras.
