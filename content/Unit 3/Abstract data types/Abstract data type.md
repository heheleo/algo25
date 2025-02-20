---
aliases:
  - abstract data type
  - ADT
---
A [[Data type|data type]] that has its behaviour defined, but lacks an explicit implementation. 

As abstract data types only describe the logic, it is **language agnostic**, meaning that it can be implemented in most programming languages. When it is implemented, it is considered to be a data structure.
## Motivation
To hold data and information more effectively, we need to model the general form that it has, and what we expect to do with it. Hence, we use ADTs to abstract away the implementation details, presenting a simpler interface that reduces complexity, and facilitating greater functionality and readability of algorithms.[^1]
## Signature
Each data type contains a [[Abstract data type signature|signature]], which provides information about the possible operations and outputs.
## Types
- [[Set]]
- [[List]]
- [[Array]]
- [[Dictionary|Dictionary (associative array)]]
- [[Stack]]
- [[Queue]]
	- [[Priority queue]]
- [[Graph|Graphs]]

[^1]: https://courses.cs.washington.edu/courses/cse373/02wi/slides/ADT/tsld002.htm
