Heuristics are techniques that aim to increase the speed of finding a solution, sacrificing accuracy for speed. Heuristics give an approximate solution at a faster speed, however this solution may not be correct. For example, [[Hill climbing]] only gives a locally optimum solution, and may miss a globally optimum solution. Heuristics are used for [[Limits of Computability#Soft Limit of Computability|intractable problems]], where a regular approach would be too slow to work. Heuristics usually provide an estimate of some value, for example the cost from the current node to the end node.

Heuristics are admissible if it never overestimates the true cost.

### Metaheuristics
Metaheuristics are higher-level heuristics that optimise the use of heuristics. For example, [[Simulated Annealing]] is a metaheuristic that optimises [[Hill climbing]] to reach a global maximum instead of a local maximum.