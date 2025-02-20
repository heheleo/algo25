An [[Abstract data type|ADT]] that contains a collection of (key, value) pairs, such that each key appears at most once in the collection.[^1]

Also known as associative arrays.
## Properties
- *mutable* length
	- you set as many (key, value) pairs as you like, but keys must be unique
- keys must be unique
	- if it isn't, you are effectively overwriting the original value
- pairs are unordered
	- programming languages may provide ordered solutions e.g. `OrderedDict` vs `dict` in Python
## Signature
```
name: Dictionary
import: key, value, integer, boolean
operators:
  newDict: -> Dictionary;
  insert: Dictionary × key × value -> Dictionary;
  inDict: Dictionary × key -> boolean;
  remove: Dictionary × key -> Dictionary;
  lookup: Dictionary × key -> value;
  update: Dictionary × key × value -> Dictionary;
  length: Dictionary -> integer;
```

[^1]: https://en.wikipedia.org/wiki/Associative_array