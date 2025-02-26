Provides metadata about the abstract data type. This includes:
- the name of the abstract data type
- the [[Data type|data types]]/variables that it can use within its operations
- the possible operations and expected inputs and outputs for each of those operations. 
## Notation
- $\times$: formally the **cross product** of element types
- $\to$: the resulting element type

> [!example] Example
>  $\text{add}:\text{set}\times\text{element}\to\text{set}$
>  
>  This means that within a set, there exists an "add" operator that accepts an "element", and after the operation is done it returns a set. It is like knowing the parameters and the return type of a function. We do NOT need to know what actually happens, meaning you CANNOT infer that it would add an element to the set.
## Format
The signature must contain:
- the name of the abstract data type (normally proper noun e.g. Set)
- what could be used within the operations (hence, they are "imported")
	- this could be [[Data type|data types]], such as boolean.
	- this could also be variables that is *obviously* defined.
		- for example, by importing "element", we could easily infer that "element" is an element within the set.
**Usually**, abstract data types includes an operation for:
- checking if it is empty
- returning its size
- getting an element
```
name: <name>
import: <data type>, ..., ...
operations:
  empty: ...
  ...
```