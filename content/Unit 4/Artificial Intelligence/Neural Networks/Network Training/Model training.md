Model training is the process by which neural networks are fit to a set of training data. 

During training:
- data is input into the network and an output is generated via [[Forward Propagation|forward propagation]]. 
- a loss function is calculated using the predicted output and actual label. 
## Not in the SD
The gradient of the [[Loss function (Error Function)|loss function]] is computed using backpropagation, which is then used to optimise the weights in order to minimise the loss via [[gradient descent]]. 
This involves derivatives, and Euler's method is commonly involved.