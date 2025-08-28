The loss function in a neural network quantifies the difference, or error, between the output predicted by the neural network and the actual, desired target values.
(supervised training)

It serves as a measure of how well the neural network is performing during training, and is used to determine to what degree the network should be tweaked.


### Common loss functions

##### Mean squared error
$$
Error=\frac{1}{n}\sum_{i=1}^n(y_{i}-\hat{y}_{i})^2
$$
where $y$ is predicted value, and $\hat{y}$ is real value.
