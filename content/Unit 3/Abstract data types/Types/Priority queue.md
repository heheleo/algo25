An [[Abstract data type|ADT]] that contains a collection of elements, where each element has an associated priority/ranking. Elements with higher priority will be served before elements with low priority. It is similar to a [[Queue|queue]].[^1] 
## Types of priority queues
- **max priority queues**: removes/gets elements with the highest priority 
- **min priority queues**: removes/gets elements with the lowest priority
## Properties
- each element is assigned a priority/ranking
- elements with higher priority will leave before elements with lower priority
- *mutable* length
- it is not a [[Queue|queue]] (as it does not follow LIFO), but it is considered a variation of the queue.
- if two values have the same priority
	- in some implementations, they are served in the same order in which they were enqueued
	- other implementations simply reject this behaviour and return undefined
- follows the same enqueue/dequeue principle as [[Queue|queues]]
## Signature
```
name: PQueue
import: element, rank, boolean
operators:
  minPQueue: -> PQueue;
  maxPQueue: -> PQueue;
  enqueue: PQueue × element × rank -> PQueue
  front: PQueue -> element
  dequeue: PQueue -> PQueue
  isEmpty: PQueue -> boolean
```
Note how two constructors are used - one to for min priority queues and one for max priority queues.
## Implementation
Python 3:
> [!note]- Using sorted() and lambdas (no imported modules)
> ```python
> urban_population_data = {
> 	"India": 36,
> 	"China": 65,
> 	"US": 83,
> 	"Indonesia": 59,
> 	"Pakistan": 35,
> 	"Nigeria": 54,
> }
> 
> # Enqueue new data
> new_data = {"Brazil": 88}
> urban_population_data.update(new_data)
> 
> # Minimum Priority Queue by urban population %
> # the lambda means fetch the 2nd element (in this case, the value)
> minPQ = sorted(
>     urban_population_data.items(), key=lambda elem: elem[1]
> )
> print("minPQ is ", minPQ)
> 
> # Maximum Priority Queue by urban population %
> maxPQ = sorted(
> 	urban_population_data.items(), key=lambda elem: elem[1], reverse=True
> ) # reverse=True for descending order
> print("maxPQ is ", maxPQ)
> ```


[^1]: https://en.wikipedia.org/wiki/Priority_queue