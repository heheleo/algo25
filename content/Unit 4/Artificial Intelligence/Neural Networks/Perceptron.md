An artificial neuron. The simplest artificial neural network architecture, commonly used for [[Binary classification|binary classification]]. [^1]
## Components

Data:
- [[Feature|features]]: each representing a characteristic of the input data.
- weights: each feature has a weight that determines its influence on an output. These weights are adjusted via [[Training with Data (Types of machine learning)|training]] to find their optimal values.
- bias: an adjustable numerical term that is added to the weighted sum before the activation function is applied. 
	- This term is independent of the inputs, giving the perceptron more flexibility to fit more complex data.

Functions:
- summation function: function that calculates the weighted sum of its input
- activation function: comparing weighted sum to a threshold to produce a binary output. This is often a Heaviside step function.

The general idea is that different weights will represent the importance of each input, and that the weighted sum should be greater than a threshold value before making a binary decision:
![[Pasted image 20250822151129.png]]
## Perceptron Algorithm[^2]
1. Set a threshold value. 
2. Multiply all input features with their weights
3. Sum all the results, giving the weighted sum
4. Activate the output

Note will only output binary.
## Example
The perceptron decides if we should go to a concert. It will output "Yes" or "No".
![[Pasted image 20250822150641.png]]
1. Set a threshold value: 1.5
2. Multiply all input features with its weights:
	1. $x_{1} \times w_{1}=0.7$
	2. $x_{2} \times w_{2} = 0$
	3. ...
3. Sum the results: for example, $1.6$ (also known as the weighted sum) 
4. Activate output: since $1.6 > 1.5$, return Yes.

## Application of obtained weight values
The obtained weight values can be used to form the equation of a line/plane/hyperplane.
From the equation
$$
\sum_{i=1}^n w_{i}x_{i}-\text{bias}=0
$$

For example, for a certain perceptron after training, we obtain the weights
$[0.00416, -0.05986]$
and a bias of 0.
We can use this to form the equation $0.00416x_{1}-0.05986x_{2}=0$.
Which becomes a separator line for the two regions of the graph, representing what inputs the perceptron will give what output.

![[Pasted image 20250828161302.png|400]]

Linear seperation


## Limitations
- limited to linearly separable problems
- requires labelled data for training
[[Multi-layer Perceptron]] overcomes these limitations.

[^1]: https://www.geeksforgeeks.org/machine-learning/what-is-perceptron-the-simplest-artificial-neural-network/

[^2]: https://www.w3schools.com/ai/ai_perceptrons.asp
