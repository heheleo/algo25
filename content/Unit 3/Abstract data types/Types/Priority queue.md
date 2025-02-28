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
> [!note]- Python 3 - PriorityQueue import
> ```python
> from queue import PriorityQueue 
> 
> # NOTE: This is a MINIMUM priority queue
> # this CAN BE CHANGED if you negate all of the priorities, but then all other associated logic might also require reversing, hence, likely not a good decision. Implement a class yourself.
> q = PriorityQueue() 
> 
> # insert into queue 
> # in syntax .put((weight, item))
> # note it must be in brackets as it is a tuple
> # the tuple can have infinite length, but the first item will always be the priority/rank 
> q.put((500, "john"))
> q.put((200, "michael"))
> 
> # remove and return 
> # lowest priority item 
> print(q.get()) # (200, "michael")
> print(q.get()) # (500, "john")
> 
> # check queue size 
> q.qsize() # 0
> 
> # check if queue is empty 
> q.empty() # True
> 
> # check if queue is full 
> q.full() # False
> ```

> [!note]- Python 3 (native) - constructing max/min priority queues
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