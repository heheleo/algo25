Neural networks consist of neurons and connections, where each connection has an associated weight. Feedforward neural networks are a type of neural network, which consists of an input layer, one or more hidden layers, and an output layer. Data is fed into the neural network through the input layer, processed in the hidden layers, and then output through the output layer.

Each neuron has an activation function, which determines the output of the neuron based on the input. For example, ReLU(rectified linear unit) is an activation function defined as $\text{max}(0,x)$, where $x$ is the input to the neuron. The input of a neuron is the sum of the outputs of the connected neurons on the previous layer, weighted by the weights of the connections.




I assume that the only type of neural networks in Algorithmics are feedforward neural networks, however other types of neural networks exist, such as recurrent neural networks. There are also biases, but they might not be covered.