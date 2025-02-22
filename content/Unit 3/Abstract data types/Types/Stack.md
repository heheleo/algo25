An [[Abstract data type|ADT]] that contains a collection of elements, and follows the **last in first out** (LIFO) principle.[^1]
## Properties
- only the most recently added element of the stack can be viewed
- returning the value of the last element added without modifying the collection is called *peeking*
- adding an element is called *pushing*
- removing the most recently added element is called *popping
- follows last in first out (LIFO) principle
	- the most recently added element will be the first element to be removed
- *mutable* length
## Visual example
![[Pasted image 20250220193651.png]] 
## Signature
```
name: Stack
import: element, boolean
operators:
  newStack: -> Stack;
  push: Stack × element -> Stack;
  pop: Stack -> Stack;
  top: Stack -> element;
  isEmpty: Stack -> boolean;
```

[^1]: https://en.wikipedia.org/wiki/Stack_(abstract_data_type)



```python

class Stack:
    def __init__(self):
        self.Stack=[]

    def push(self,val):
        self.Stack.append(val)
        
    def pop(self):
        lengh=len(self.Stack)
        if lengh==0:
            return None
        else:
            return self.Stack.pop(lengh-1)
        
    def top(self):
        lengh=len(self.Stack)
        if lengh==0:
            return None
        else:
            return self.Stack[lengh-1] 
        
    def isEmpty(self):
        return (True if len(self.Stack) == 0 else False)
    

        
```