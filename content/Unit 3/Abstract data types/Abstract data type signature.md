The signature of an [[Abstract data type|abstract data type]] provides metadata about the abstract data type. This includes:
- the name of the abstract data type
- the [[Data type|data types]] that it can possibly use within its operations
- the possible operations and expected inputs and outputs for each of those operations. 
## Notation
- $\times$: formally the **cross product** of element types
- $\to$: the resulting element type

For example, $\text{add}:\text{set}\times\text{element}\to\text{set}$ means that within a set, there exists an "add" operator that accepts an "element", and after the operation is done it returns a set. It is like knowing the parameters and the return type of a function.

## Format
Usually, abstract data types includes an operation for:
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

### Common operations
- create element
- add element
- delete element
- update element
- access size
- access element 
- other ADT specific operations