## Adding
```python
G.add_node(1) # one node at a time
G.add_nodes_from([2, 3]) # from an interator
# iterator of 2-tuples of the form (node, node_attributes)
G.add_nodes_from([(4, { "color": "red" })], (5, { "color": "green" }))
G.add_nodes_from(H) # import nodes from another graph, H
```
## Removing
```python
G.remove_node(2) # removes 2 from the graph
G.remove_nodes_from("spam") # removes s, p, a, m from the graph
```
## Accessing
```python
G.add_node(1)
G.nodes[1] # {} as it returns its attributes
```
## Node attributes
```python
# Add a node with an attribute
G.add_node(1, time='5pm')

# Add multiple nodes with the same attribute
G.add_nodes_from([2,3], time='5pm')

# Modify it later
G.nodes[2]['room'] = 714

# Get node attributes
G.nodes[1]
# {'time': '5pm'}
```
## Iterating through nodes
```python
G.nodes.data() # returns a dict of node, node attribute pairs
# { 1: { ...node attributes}, 2: { ...node attributes}}
```