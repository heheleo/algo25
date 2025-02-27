---
aliases:
  - graph
---
An [[Abstract data type|ADT]] which represents information through [[Node|nodes]] and [[Edge|edges]].
## Notation
[[Notation#Graph]]
## Properties
- [[Diameter (graph theory)|Diameter]]
- [[Distance (graph theory)|Distance]]
## Representations
- [[Adjacency matrix]]
- [[Adjacency list]]
- [[Incidence matrix]]
- A diagram with [[Node|nodes]] interconnected using [[Edge|edges]].
## Signature
```
name: Graph
import: node, edge, list, bool
operators:
  newGraph: -> Graph;
  nodes: Graph -> list;
  edges: Graph -> list;
  addNode: Graph × node -> Graph;
  deleteNode: Graph × node -> Graph;
  addEdge: Graph × edge -> Graph;
  deleteEdge: Graph × edge -> Graph;
  isAdjacent: Graph × node × node -> boolean;
  neighbours: Graph × node -> list;
```
## Variations
- [[Tree]]
	- [[Decision tree]]
	- [[Directed tree]]
	- [[Forest]]
	- [[Minimum spanning tree]]
	- [[Spanning tree]]
- [[Complete graph]]
- [[Connected graph]]
- [[Directed acyclic graph]]
- [[Directed graph]]
- [[Labelled graph]]
- [[Planar graph]]
- [[Simple graph]]
- [[Subgraph]]
- [[Undirected graph]]
- [[Weighted graph]]
