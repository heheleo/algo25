Pseudocode defines and describes how an algorithm works through the use of a more understandable language (English).

Types of pseudocode:
- structured English
- structured pseudocode

Flowcharts are also important when it comes to representing computing processes.
## Advantages and disadvantages of pseudocode
Advantages:
- readable
- good for communication between programmers using other languages
- easy to plan describe and communicate
- easy to modify and trouble shoot logic (similar to rubber ducky)
- easy to transform into actual code (subjective)
Disadvantages:
- lack of standards
- few rules
- potential ambiguity (*e.g. does "for x from 1 to 2" include 2?*)
- more detail oriented
# Structured English
Just normal English that describes steps in discrete instructions similar to code:
```
Set count to 0
Look at each item in price list
if price less than 30
add 1 to count
once complete, display count
```
# Structured pseudocode
Makes use of phrases similar to real code
For algorithms there is not a strict set of syntax for pseudocode.
## Common conventions
Common but not mandatory conventions include:
- indenting blocks
- using "End (Block Type)" such as 'End For' to end blocks
- different operators for assignment and comparison
	- common pairs include:
		- ''=" for assignment "=\=" for comparison
		- "<-" or ":=" for assignment "="  for comparison
## Blocks
### IF
```
If cond then
	...
Else
	...
End If
```
### FOR
note, does not include the second number, goes  \[1:10)
```
For var = 1 to 10 do
	...
End do
```

```
Foreach var in list do
	...
End do
```
### WHILE
```
While (cond) do 
	...
End do
```
### REPEAT UNTIL
```
Repeat until (cond) do
	...
End do
```
### ALGORITHM
```
Algorithm algoName
	//Input: ...
	//Input: ...
	//Output: ....
	//Assumption: ...

End Algorithm
```
### FUNCTION
```
Function functName (inputs)
	//Outputs: ...
	//Assumptions: ...

	...

End Function
```

Call a function by
```
functName()
```