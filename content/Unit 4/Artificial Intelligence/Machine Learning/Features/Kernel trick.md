Involves introducing a new [[Feature|feature]] derived from preexisting features, in order to distinguish non linearly separable data. Commonly, using a non-linear function, features may be transformed (e.g. $x_{2}=(x_{1})^2$). Then, in its respective new dimension, a new hyperplane can be found.

==The name 'kernel trick' is not explicitly mentioned in the study design. Refer to the theory as 'introducing a new feature' instead.==
## 1D to 2D
Only case covered in the study design. Common transformations include raising to an exponent or applying a logarithm.
## 2D to 3D
A common transformation is $x_{3}:=(x_{1}-c_{1})^2+(x_{2}-c_{2})^2$.
where $x_{1}$ and $x_{2}$ are 2 diff feature/axis, $c_n$ are constants. 
$x_{3}$ represent the square of the distance of any point to the cords $(c_{1},c_{2})$.
Can be used to represent information like resemblance to a certain instance.
![[Pasted image 20250828170452.png]]
[Source](https://www.researchgate.net/figure/Non-linear-classifier-using-Kernel-trick-16_fig4_340618118)