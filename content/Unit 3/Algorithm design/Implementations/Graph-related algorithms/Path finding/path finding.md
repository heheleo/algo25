
Very similar to graph traversal, except you return the route used to reach a target end node.

This is commonly implemented by using the same algorithm as traversal, but storing lists that contain the entirety of the path used to reach a node.

| Parameters            | BFS                                                                      | DFS                                                                                        |
| --------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Data structure        | Queue                                                                    | Stack                                                                                      |

By storing entire paths, we can still see what node we are "up to" within the graph, as well as being able to output a complete graph once we reach the target node.