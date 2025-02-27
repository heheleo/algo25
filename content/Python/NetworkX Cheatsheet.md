## Empty graph
```python
import networkx as nx
G = nx.Graph()
```
## Graph constructors
```python
H = nx.Graph(G) # create a new graph using connections from G

edgelist = [(0, 1), (1, 2), (2, 3)]
H = nx.Graph(edgelist)  # create a graph from an edge list

adjacency_dict = {0: (1, 2), 1: (0, 2), 2: (0, 1)}
# create a graph specifying node name and the nodes it connects to
H = nx.Graph(adjacency_dict) 
```
## Generating common graphs
```python
K_5 = nx.complete_graph(5) # Complete graph
K_3_5 = nx.complete_bipartite_graph(3, 5) # Complete bipartite graphs
```
## Managing nodes
[[NetworkX Nodes]]
## Managing edges
[[NetworkX Edges]]
## Drawing graphs
```python
import matplotlib.pyplot as plt

options = {
    "font_size": 36,
    "node_size": 3000,
    "node_color": "white",
    "edgecolors": "black",
    "linewidths": 5,
    "width": 5,
}
# Draw the graph at the end with options (optional)
nx.draw_networkx(G, **options)

ax = plt.gca()
ax.margins(0.20) # may need to set margins
plt.axis("off") # disable axis
plt.show()
```
