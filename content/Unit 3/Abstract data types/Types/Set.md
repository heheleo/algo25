An [[Abstract data type|ADT]] that is a collection of elements (normally [[Primitive data type|primitive data types]]), but cannot contain duplicate elements and is unordered.
## Properties
- *mutable* length
	- length can be changed
- duplicate items are not allowed
	- this means that the set will only contain unique values
- elements are unordered
	- this also implies that elements are not indexed. Hence, you cannot find an element's position within the set, you can only find whether it is present in the set or not.

Some set data structures are designed for frozen sets that do not change after they are constructed.[^1] However, we normally use dynamic sets, which allows addition and deletion of elements.
## Signature
```
name: Set
import: element, integer, boolean
operators:
  newSet: -> Set;
  add: Set × element -> Set;
  remove: Set × element -> Set;
  contains: Set × element -> boolean;
  size: Set -> integer;
  isEmpty: Set -> bool;
```

[^1]: https://en.wikipedia.org/wiki/Set_(abstract_data_type)
