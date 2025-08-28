### Weight vector
The weight vector, is denoted as $w$, where:
$$
w=
\begin{bmatrix}  
w_{1} \\  
w_{2}\\ 
\dots \\
w_{n}
\end{bmatrix}
$$

### Data(?) vector
The weight vector, is denoted as $x$, where:
$$
x=
\begin{bmatrix}  
x_{1} \\  
x_{2}\\ 
\dots \\
x_{n}
\end{bmatrix}
$$
Used to denote the position of one data point.
### Implications
From [[Decision boundary (Linear)]], we know that the decision boundary is notated as
$$
w_{1}x_{1}+w_{2}x_{2}+\dots+w_{n}x_{n}+b=0
$$
As vectors
$$
w\cdot x+b=0  
$$
Note: if treating $x$ and $w$ as matrices, need to transpose the first term, eg $w^T$,

$$
\text{vector dot product of w and x}=-b\text{ (constant number)}
$$
You may recognise this from Specialist Maths as the cartesian equation for a plane/hyperplane 
($r\cdot n=r_{0}\cdot n$).

Here $r$, or the position vector, is represented by $x$.
This makes $w$ the normal vector.
**$w$ will always be normal to classification (decision and margin) boundaries**.
%% NOT SUREL Note that the magnitude of $w$ is not significant as the bias and $w$ are both adjusted during training. %%
![[Pasted image 20250828221537.png]]