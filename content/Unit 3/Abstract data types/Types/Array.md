An [[Abstract data type|ADT]] that contains a collection of items (normally [[Primitive data type|primitive data types]]), each identified by at least one array index. 
## Properties
- *immutable* length
	- in other words, has a fixed length and cannot be changed after initialisation
	- this also means by "adding" an element into an array, you are overwriting it at its specific array index
- elements are accessed using 0-based indexing
	- this means that the first element has index 0
- elements are ordered
## Signature
```
name: Array
import: element, integer, boolean
operations:
  newArray: integer -> Array;
  get: Array × integer -> element;
  set: Array × element × integer -> Array;
  length: Array -> int;
```
## Implementation
> [!note]- Python 3
> ```python
> # initialisation
> car_brands = ["bmw", "mercedes", "toyota"]
> 
> # getting
> car_brands[1] # "mercedes"
> 
> # setting
> car_brands[0] = "volvo" # ["kia", "mercedes", "toyota"]
> 
> # length
> len(car_brands) # 3
> ```

