A [[Trail|trail]] (no repeated edges) that follows every edge.
## Existence
An Eulerian trail will exist if and only if the graph:
- is connected
- has exactly *zero* or *two* [[Node|nodes]] that have an **odd** [[Degree|degree]]
	- if there are zero [[Node|nodes]] with odd degree, the Eulerian trail can start at any [[Node|node]] in the graph.
	- if there are two [[Node|nodes]] with odd degree, the Eulerian trail will start at one of the odd degree [[Node|nodes]], and **finish at the other**.