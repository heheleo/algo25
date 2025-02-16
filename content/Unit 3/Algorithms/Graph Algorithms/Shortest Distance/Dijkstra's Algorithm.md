Worst-case performance: $\Theta(|E|+|V|log(|V|))$
![[Dijkstra_Animation.gif]]

Dijkstra's Algorithm is a greedy algorithm that finds the shortest path between nodes in a weighted graph. Dijkstra's algorithm returns the distances of the shortest paths from a node to all other nodes in a graph, and can be used to find the shortest path between two nodes. Dijkstra's Algorithm operates by keeping a list of all unvisited nodes and the distances from each node to the initial node, and then repeatedly visiting the unvisited node with the lowest distance, and updating the distance of all of its adjacent nodes.


Python Implementation:
```python
import networkx as nx

def dijkstra(graph: nx.Graph, start) -> dict:
    unvisited = list(graph.nodes)
    node_distances = {node: float('inf') for node in graph.nodes}
    node_distances[start] = 0
    while len(unvisited) > 0:
        node = min(unvisited, key=lambda x: node_distances[x])
        for i in graph.neighbors(node):
            if i in unvisited:
                node_distances[i] = min(node_distances[i], node_distances[node] + graph[node][i]['weight'])
        unvisited.remove(node)
    return node_distances

def find_shortest_path(graph: nx.Graph, start, end) -> list:
    node_distances = dijkstra(graph, start)
    path = [end]
    while path[0] != start:
        for i in graph.neighbors(path[0]):
            if node_distances[i] == node_distances[path[0]] - graph[path[0]][i]['weight']:
                path.insert(0, i)
                break
    return path
```