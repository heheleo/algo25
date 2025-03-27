Distance matrix is a $|N|$ by $|N|$ matrix that stores the weight of the edge defined by the source node to the target node.

Stores weight of edge.
If no edge exist, distance is infinite.
Cells where target node is the same as source node has value of 0

## Notation
Weight matrix is commonly notated as $W$.


### Example


![[Pasted image 20250327173016.png]]

|     | a   | b   | c   | d   |
| --- | --- | --- | --- | --- |
| a   | 0   | inf | 3   | inf |
| b   | 2   | 0   | inf | inf |
| c   | inf | 7   | 0   | 1   |
| d   | 6   | inf | inf | 0   |

