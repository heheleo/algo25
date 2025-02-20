#todo #k
Developed by George Boole, he demonstrated that all logical expressions could be constructed using three fundamental operations:
- AND
- OR
- NOT
This was later implemented in electrical circuits and laid the foundation for digital processing.
## Boolean variable 
A Boolean is a variable that can only exist with values of either True or False.
## Logic Statementa
A logic statement is a statement that are either True or False.
These are often simple declarative statements such as "It is raining right now", which may be True or False depending on current circumstances.
## Boolean operations
The three fundamental operations are:
- NOT
- AND
- OR
### Order of Precedence
Similar to mathematical operations, Boolean algebra also has a "order of operations".
For Boolean algebra this is called the **order of precedence**.
The order is:  **NOT** -> **AND** -> **OR**
Parenthesis may be used to override these orders.


## Boolean Algebra

### Boolean operand
 An operand is nothing more than a value.
Pronumerals are used to express unknown Boolean values.
These are often expressed with letters such as $A$ or $B$.
Boolean values are commonly expressed using True/False or 0 & 1.

### Negation
#TOBECONFIRMED
The negated statement of a boolean value, can be represented through various ways.

Eg for the negation of $A$, it can be notated as follows

| notation                                | notes        |
| --------------------------------------- | ------------ |
| $$\text{not }A$$                        |              |
| $$\text{not }(A)$$                      |              |
| $$¬ A$$                                 |              |
| $${\displaystyle {\mathord {\sim }}A}$$ |              |
| $${\displaystyle -A}$$                  |              |
| $$A'$$                                  | p complement |
| $$\bar{A}$$                             | p bar        |
| $$!A$$                                  |              |

### Operators

| notes                     | notation                     |                          | Examples                                  |
| ------------------------- | ---------------------------- | ------------------------ | ----------------------------------------- |
| If A = B,true, else false | $$A \text{ EQ }B$$           | $$\overline{(A-B)}$$     |                                           |
| NOT, negation             | $$\bar{A}$$                  |                          | $0'=1$<br>$1'=0$                          |
| OR, **disjunction**       | $$A∨B$$                      | $$A+B$$                  | $1+1=1$<br>$1+0=1$<br>$0+0=0$             |
| AND, **conjunction**      | $$A∧B$$                      | $$A \cdot B$$            | $1\cdot1=1$<br>$1\cdot0=0$<br>$0\cdot0=0$ |
| xor                       | $$A\bar{v}B \text{ or }A⊕B$$ | $$\bar{A} B + A\bar{B}$$ |                                           |


### AND Properties

| Name             | AND form                                   | Examples                | Explanation                                                                                                                                               |
| ---------------- | ------------------------------------------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Idenity law      | $A\cdot1=A$                                | $1*1=1$<br>$0*1=1$      | a var AND true is dep on value of var                                                                                                                     |
| Null law         | $A\cdot0=0$                                | $1*0=0$<br>$0*0=0$      | any var AND false is false                                                                                                                                |
| Idempotent law   | $A \cdot A=A$                              | $1*1=1$<br>$0*0=0$      | a var and itself is always equal to itself                                                                                                                |
| Inverse law      | $A \cdot \bar A= 0$                        | $1*0=0$<br>$0*1=0$      | any var and its negation cannot both be true, thus the conjunction is always false                                                                        |
| Commutative law  | $A \cdot B=B \cdot A$                      | $1*0=0*1$<br>$1*1=1*1$  | conjunction is not dependent on order                                                                                                                     |
| Associative law  | $A \cdot (B \cdot C)=C \cdot (A \cdot B)$  | $1*(0*1)=(1*0)*1$       |                                                                                                                                                           |
| Distributive law | $A +( B \cdot  C) = (A + B) \cdot (A + C)$ | $1+(1*0) = (1*1)+(1*0)$ |                                                                                                                                                           |
| Absorption law   | $A\cdot (A+B) = A$                         | $1*(1+0)=1$             | $A*(A+B)$<br>$=A*A+A*B$<br>= A or (A and B)<br>If A is true, statement is true by or disjunction, if a is false both  sides of disjunction  will be false |
| De Morgan's law  | $\overline{(A \cdot B)} = \bar A + \bar B$ | $(1*0)'=1'+0'=1$        | negation of conjugation is disjunction<br>(negation of and is or)                                                                                         |





### OR Properties

| Name             | OR form                                | Examples             | Explanation                                                                              |
| ---------------- | -------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------- |
| Idenity law      | $A+0=A$                                | $1+0=1$<br>$0+0=0$   | Any var OR false depends on var itself                                                   |
| Null law         | $A+1=1$                                | $0+1=1$<br>$1+1=1$   | any var OR true is true                                                                  |
| Idempotent law   | $A+A=A$                                | $1+0=1$<br>$1+1=1$   | any var or itself is itself                                                              |
| Inverse law      | $A+\bar A = 1$                         | $1+1'=1$<br>$0+0'=1$ | any var OR its negation is always true as one out of the two has to be true              |
| Commutative law  | $A+B=B+A$                              | $1+0=0+1$            | A OR B = B OR A                                                                          |
| Associative law  | $(A+B)+C=A+(B+C)$                      | $1+(0+1) = (1+0)+1$  | OR does not take into account order                                                      |
| Distributive law | $A \cdot (B+C) = A\cdot B + A \cdot C$ | $1*(1+0) = 1*1+0*1$  |                                                                                          |
| Absorption law   | $A+A \cdot B = A$                      | $1+1*0=1$            | A OR (A AND B) will always be dependent on A as right term can only be true if A is true |
| De Morgan's law  | $\overline{A+B} = \bar A \cdot \bar B$ | $(1+0)'=1'+0'$       | negation of disjunction is conjunction                                                   |
