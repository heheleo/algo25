Model training is the process by which neural networks are fit to a set of data. 
During training:
- data is input into the network and an output is generated via [[Forward Propagation]]. 
- A loss function is calculated using the expected and actual output. 
- The gradient of the [[Loss function (Error Function)|loss function]] is computed using backpropagation, which is then used to optimise the weights in order to minimise the loss via [[gradient descent]]. 
*Backpropagation, to propagate it back, the weights of the first hidden layer are updated with the value of the gradient.*
This involves derivatives, Euler's method is commonly involved for differential equations.