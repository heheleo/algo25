
**Not algo specifc, used as an example for proof of contradicction**



This principle states that, for $k$ is a positive integer, and $k+1$ objects are placed into $k$ boxes. Then there is at least one box containing two or more of the objects.



Let $A$ represent the fact that  $k+1$ objects are placed into $k$ boxes.
Such that:
$$
A:n(\text{Objects}) = n(\text{Boxes}) -1 
$$

let $B$ represent the fact that at least one box containing two or more of the objects
$$
B:
max(\text{Box Contents}) > 1
$$


Let $P$ represent statement
$$
\forall n(\text{Boxes}) \in \mathbb{Z}^+,
A
\implies
B
$$


#### Step 1  Assume negation

Negation of $P$ can be represented by $P'$

$P': A \land B'$
(De Morgan's laws)

The negation of $P$ states that $A$ is true **and** $B$ is false.


Assume: 
- number of total objects exceeds number of boxes
- no box has more more than one object 

#### Step 2 Show that a contradiction occurs

No box has more than one object.
Thus $n(\text{boxes}) < n(\text{objects})$
Direct contradiction with the assumed statement "*number of total objects exceeds number of boxes*"

Thus as $P'$ is false.
$P$ is true



