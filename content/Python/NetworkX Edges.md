## Adding
```python
G.add_edge(1, 2) # add an edge between nodes 1, 2

edge = (2, 3) # 2-tuple
G.add_edge(*edge) # * means to "unpack" the tuple

G.add_edges_from([(1,2), (3,4)]) # adding from a 2-tuple iterator
```
## Removing
```python
G.remove_edge(1, 2) # removes the edge (1, 2)
```
## Accessing
```python
G = nx.Graph([(1, 2, {"color": "yellow"})])

# What is node 1 connected to?
G.adj[1]
G[1] # same thing as G.adj[1]
# {2: {'color': 'yellow'}}
# means its connected to node "2", and the edge has a yellow color.

# Access edge (1, 2)
G[1][2]
G.edges[1, 2]
# {'color': 'yellow'}
```
## Editing
```python
G.add_edge(1, 3)

# Change the edge between nodes 1, 3 to have blue color
# Different methods, same outcome:
G[1][3]['color'] = "blue" 
G.edges[1, 3]['color'] = "blue"
```
## Iterating edges
```python
# Iterate each edge that has no weight
for (u, v) in G.edges.data():
	print(f"{u} connected to {v}")

# Iterate edges that yields the color attribute (with a default, if no color attributes exists)
for (u, v, color) in G.edges.data('color', default='red'):
	print(f"{u} connected to {v} with color {color}")

# Iterate edges that yields the weight attribute (with a default if the edge does not have a weight)
for (u, v, wt) in G.edges.data('weight', default=0):
	print(f"({u}, {v}, {wt:.3})") # {wt:.3} => print 3 decimal places

# Iterate edges of specific NODES
# e.g. find edges that nodes 0, 3 are connected to
# this would return something like [(0,1), (3,2)]
for (u, v) in G.edges([0, 3]):
	print(f"node {u} connected to {v}")

# or only one specific node
G.edges(0) # or G.edges([0])
# would return e.g. [(0,1)]
```
## Edge attributes
```python
# Add single edge
G.add_edge(1, 2, weight=4.7)

# Add multiple edges with same attribute
G.add_edges_from([(3, 4), (4, 5)], color='red')

# Add edges with seperate attributes
G.add_edges_from([(1, 2, {'color': 'blue'}), (2, 3, {'weight': 8})])

# Modify an edge's attribute
G[1][2]['weight'] = 4.7
G.edges[3, 4]['weight'] = 4.2
```