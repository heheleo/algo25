An [[Abstract data type|ADT]] that contains a collection of items (normally [[Primitive data type|primitive data types]]), each being identified by an index, however, unlike [[Array|arrays]], it is flexible and can change its length.
## Properties
- *mutable* length
	- if no more space is present, we can increment the length
	- this is why elements can be inserted
- items are accessed using 0-based indexing
- elements are ordered
## Signature
```
name: List
import: element, integer, bool
operators:
  newList: -> List;
  prepend: List × element -> List;
  append: List × element -> List;
  insert: List × element × integer -> List;
  get: List × integer -> List;
  delete: List × integer -> List;
  length: List -> integer;
  isEmpty: List -> boolean;
```
Note that the ability to `set`, `get` can be added, however the ultimate goal is to highlight list's unique capability of resizable lengths, hence the emphasis on "append", "prepend", "insert" operators.
## Implementation
Python 3:
```python
# initialisation (note it is the same as arrays)
random_numbers = [10, 20, 15]

# getting
random_numbers.get(0) # 10

# appending
random_numbers.append(50) # appends 50 at the back

# prepending
random_numbers.insert(0, 10) # inserts 10 at the start

# inserting
random_numbers.insert(3, 25) # inserts 25 at index 3

# deleting
# note that the signature requires the index,
# but in python, we put in the actual value
random_numbers.remove(10) # removes the literal 10 from the list

# length
len(random_numbers)
```
