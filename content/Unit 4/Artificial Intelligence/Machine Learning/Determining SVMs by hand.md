## Disclaimer
This is not in the study design, however, our teacher has done this in a previous SAC.
## Question
![[Pasted image 20250909182949.png]]
## Process
1. **Find the equation of an actual line that is a decent hyperplane:**
	Here, a good hyperplane would be a linear line in the middle of the points (2,3) and (4,5). Note that the gradient of the line would be $-1$ (perpendicular to the line that joins the two support vectors). Hence, note that our line would be: $x_{2}-3=-(x_{1}-2)$. Rearranging, we get $x_{1}+x_{2}-7=0$.
2. **Note down the proportion of the weights and find a relationship between the weights:**
	The weights $(w_{1},w_{2})$ must be proportional to the coefficients of the line. Hence, $(w_{1},w_{2})=k(1,1),k\in \mathbb{R}$. Therefore, $w_{1}=w_{2}$. 
3. **Create new equations that satisfy the class +1 and -1 equations:**
	Recall that support vectors must satisfy the margin equations:
	- $w_{1}x_{1}+w_{2}x_{2}+b=+1$ - positive class vectors
	- $w_{1}x_{1}+w_{2}x_{2}+b=-1$ - negative class vectors
	Substituting points, this yields:
	- $4w_{1}+5w_{2}+b=-1$
	- $2w_{1}+3w_{2}+b=1$
4. **Solve the equations for the weights and biases, by using the relation from step 2:**
	Solving yields $w_{1}=w_{2}=\frac{1}{2},b=-\frac{7}{2}$.