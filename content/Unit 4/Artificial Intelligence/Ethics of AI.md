AI ethics can be deﬁned as “a set of values, principles, and techniques that employ widely accepted standards of right and wrong to guide moral conduct in the development and use of AI technologies.”

Study design requires the knowledge of transparency, accountability, bias and machine ethics regarding AI ethics. Roughly remembering 3 should be enough for the exam.
# Transparency
As AI systems are growing more advanced, especially those based on deep neural networks, they increasingly fit the description of a 'black box' - although they produce highly accurate results, the process they use to arrive at the results are extremely opaque. This is an ethical concern in high-stakes fields like medicine, law or finance, where AI decisions have profound impacts on lives.
## Possible Stakeholders
- patients
- loan applicants
- individuals in the crime justice system
- students, educators
## Concepts within transparency
- Explainability: ability of an AI system to provide a clear, understandable explanation for its decisions. 
- Interpretability: degree to which a human can understand the inner workings of a model. It involves knowing how the different inputs relate to the outputs and how the inner algorithms actually work.
- Data transparency: being open about data used to train the AI model. Biased or incomplete training data is a primary source of unfair AI outcomes. Transparency requires documenting data origins, collection methods, and processing steps, to allow for bias to be detected.
## Arguments for
- fairness and bias mitigation (e.g. AI hiring tools may prefer male candidates over female candidates, perpetuating inequality)
- build public trust in AI technology - people are more willing to accept and use AI systems if they know there are mechanisms for oversight, etc
- regulatory compliance (data privacy, anti-discrimination laws)
## Arguments against
de Laat (2018) argues against full transparency, providing four main lines of reasoning:[^1]
- leaking of privacy sensitive data into the open
- backfiring into an implicit invitation to game the system
- harming of a company property rights with negative consequences on their competitiveness (and on developer reputation)
- inherent opacity of algorithms, whose interpretability may be even hard for experts
# Accountability
Specific parties must be held responsible for the outcomes of AI systems, especially when those outcomes are harmful or unjust. AI introduces a gap as the technology itself cannot be legally or ethically responsible for its actions. This shifts the burden of accountability to the people who design, develop, deploy and use the AI. ==The application of legal principles regarding accountability for AI systems is still developing. There is no AI related legislation in Australia in 2025.==[^2]
## Stakeholders
- AI engineers
- Data engineers
- Companies
## Promoting accountability
- organisations should clearly define who is responsible for each stage of the AI lifecycle
- human should maintain final authority and is able to override or question the AI's recommendations
- governments and international bodies has laws and regulations that mandate accountability
# Bias
Bias in AI refers to systematic and unfair favouritism or prejudice in AI systems, leading to discriminatory outcomes. Specific outcomes contribute to biases in AI models:[^3]
- data bias: use of unrepresentative data
- algorithmic bias: algorithm itself may introduce bias.
## Data bias
Reliance on data to [[Training with Data|train]] algorithms introduces an omnipresent challenge, as data itself can reflect biases inherent in societal structures (racism, prejudice). For example, Amazon terminated their use of AI hiring and recruitment because the algorithm favoured male candidates over female ones. This was because Amazon's system was trained with data collected over 10-year period that came mostly from male candidates.
## Algorithmic bias
The way the algorithm is built may introduce bias, for example, a credit risk model may weigh a zip code more heavily.
## Mitigating bias
- increasing [[#Transparency|transparency]] - making auditors address potential biases in the data
- use diverse and representative datasets that accurately reflect the population - proactively collecting data from underrepresented groups
- AI systems should be regularly audited for bias


[^1]: https://www.nature.com/articles/s41599-020-0501-9

[^2]: https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-principles/australias-ai-ethics-principles

[^3]: https://www.sciencedirect.com/science/article/pii/S0893395224002667
