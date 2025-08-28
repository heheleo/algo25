## Overfitting
An undesirable machine learning behaviour where the machine learning model gives accurate predictions for training data but not for new data. The model cannot generalise and fits too closely to the training dataset. [^1]
Possible reasons include:
- training data size is too small and does not contain enough data to accurately represent all possible input data values
- training data contains large amounts of irrelevant information
- model trains for too long on a single sample set of data
- model complexity is too high so it learns the noise within the training data
Consequences include:
- failure to make accurate predictions on new, unseen data
Example: model is trained on a dataset that contains dogs outside in parks. Model may learn to use grass as a feature for classification, failing to recognise dogs inside of rooms.
## Underfitting
Model cannot determine a meaningful relationship between input and output data. This often occurs when a model is too simple, it cannot establish the dominant trend within the data, leading to training errors and poor performance.
Possible reasons include:
- lack of training time
- lack of input features
Consequences include:
- failure to make accurate predictions on new, unseen data
- training errors and poor performance of the model in general
Example: model predicts house prices based solely on square footage. Model fails to account for other features like location and age, leading to poor performance on training and testing data.[^2]
## Overfitting vs underfitting
- Underfit models experience high **bias**: inaccurate results for both training data and test set.
- Overfit models experience high **variance**: accurate results for the training set but not for the test set.

![[Pasted image 20250828162728.png]]



In general, more [[Training with Data (Types of machine learning)|training]] results in less bias but variance can increase.

[^1]: https://aws.amazon.com/what-is/overfitting/

[^2]: https://www.ibm.com/think/topics/underfitting
