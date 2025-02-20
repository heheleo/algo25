An [[Abstract data type|ADT]] that contains a collection of elements, and follows the **first in first out** (FIFO) principle.[^1]

Queues depict a sequence of entities, often modelling real world situations such as car queues for carparks, task scheduling, waiting lines, call centre systems, buffering, printer management, etc.
## Properties
- adding an element to the rear of the queue is called *enqueue*
- removing an element from the front of the queue is called *dequeue*
- returning the element at the front of the queue without modifying the queue is called *peeking*/*front*
- follows first in first out (FIFO) principle
	- first element added to the queue will be the first one to be removed
- *mutable* length
## Signature
```
name: Queue
import: element, boolean
operators:
  newQueue: -> Queue;
  enqueue: Queue × element -> Queue;
  dequeue: Queue -> Queue;
  front: Queue -> element;
  isEmpty: Queue -> boolean;
```
## Implementation
Python 3: Note that you can also use lists and its related methods.
```python
from queue import Queue

# OR

class Queue:
    def __init__(self,maxsize:int):
        self.queue=[]
        self.maxsize=maxsize

    def qsize(self):
        return len(self.queue)
    
    def full(self):
        return (len(self.queue) == self.maxsize)
        
    def empty(self):
        return (len(self.queue)==0)
        
    def put(self,val):
        if len(self.queue)<self.maxsize:
            self.queue.append(val)
            return True
        else:
            return False
        
    def get(self):
        if not self.empty():
            return self.queue.pop(0)
        else:
            return None


queue = Queue(maxsize = 3)

# Get the current queue size
queue.qsize() # 0

# Enqueuing
queue.put('a')
queue.put('b')
queue.put('c')
queue.full()  # True

# Dequeuing
queue.get() # a
queue.get() # b
queue.get() # c

queue.empty() # True

queue.put(1)
queue.empty() # False
queue.full() # False
```

[^1]: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)

