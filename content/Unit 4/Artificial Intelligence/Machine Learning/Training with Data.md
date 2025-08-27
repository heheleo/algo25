Satisfies study design dot-point "explain, at a high level, how data-driven algorithms can learn from data"
## Machine learning models can be 'trained'
Data-driven algorithms, such as machine learning models, learn from data by finding and recognising patterns.

Instead of being explicitly programmed with rules, algorithms 'train' on a large dataset contained with input data and, depending on their type of learning, their corresponding correct output:
- [[Types of Machine Learning|supervised]] learning
	- the algorithm is given labelled data, with each input having a correct answer. (e.g. email contents, and whether the email is spam)
- [[Types of Machine Learning|unsupervised]] learning
	- the algorithm is given unlabelled data with no correct answers. The algorithm then attempts to find hidden groupings on its own.
- reinforcement learning
	- the algorithm learns through trial and error
	- there normally is an external program that judges the AI's performance, and judges if it is good or bad,  and gives corresponding reinforcement. This forms a feed back loop, with the goal of ensuring the AI will keep or use changes that led to better attempts.
	
Once training is complete, the algorithm has 'learned' patterns from the given data. When given new, unseen data, it applies what it learned to make a prediction. The model's success is often determined by how accurately it can generalise its knowledge, and the quality of the input data.