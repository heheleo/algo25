## Margin Boundaries

#### What are they

The margin is the distance between the decision boundary and the closest data points from either class.
![[Pasted image 20250828194513.png]]


The **Margin boundary** is a line parallel to the [[Decision boundary (Linear)]], but offset.
The distance between the positive and negative margin boundaries is the margin.
A **Maximum decision boundary** is made so that it passes through the support vectors, such that margin is maximised, but the area between two margin boundaries do not contain any data points.


## Classes of margin boundaries
Using [[Vector notation for weight and data]]

Let $h(x)=x\cdot w+b$ ($b$=bias)
If $h(x)=0$ represents the decision boundary, then $h(x)=k,k\neq{0}$ represents margin boundaries.

More specifically
- **Class +1 boundary**
	- $h(x)=1$
- **Class -1 boundary**
	- $h(x)=-1$
The margin for this pair of margin boundaries is $m=\frac{2}{||w||}$
($||w||$ is magnitude of vector $w$, it is the more formal (?) version of VCE spesh's $|w|$)
