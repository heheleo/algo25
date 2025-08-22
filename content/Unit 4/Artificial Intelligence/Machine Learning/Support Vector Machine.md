(also known as SVM) a [[Types of Machine Learning|supervised]] machine learning algorithm used for classification and regression tasks. It is a margin-maximising [[Linear classifier|linear classifier]]. It tries to find the best boundary that separates different classes in the data. 
## Principle
In the study design, hyperplanes (the decision boundaries separating classes) are only one or two-dimensional. This means that the hyperplanes can only be 1D lines or 2D planes. 

The **margin** is defined as a distance from the hyperplane to the nearest data points. The nearest data points to the line are called the **support vectors**.

The main goal of the algorithm is to **maximise** the margin between the two classes. The larger the margin, the better the model performs on new and unseen data. [^1]
![[Pasted image 20250822122600.png|220]]
## Non-linear SVMs
(unlikely in SD)
If data is not linearly separable, SVM functions to map the data into higher-dimensional space. This transformation helps SVMs find a new hyperplane within the new space.

[^1]: https://www.geeksforgeeks.org/machine-learning/support-vector-machine-algorithm/
