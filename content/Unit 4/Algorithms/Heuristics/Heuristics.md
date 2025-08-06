Heuristics are techniques that aim to increase the speed of finding a solution, sacrificing accuracy for speed.[^1] 
## Motivation
To produce a solution in a reasonable time frame that is good enough for solving the problem. Optimality, completeness, accuracy, or precision is traded for speed. It can be considered a shortcut.

For example, [[Hill climbing|hill climbing]] only gives a locally optimum solution, and may miss a globally optimum solution. Heuristics are used for [[Limits of Computability#Soft Limit of Computability|intractable problems]], where a regular approach would be too slow to work. Heuristics usually provide an estimate of some value, for example the cost from the current node to the end node.
## Admissible
If a heuristic is admissible, it never overestimates the true cost. If a heuristic is not admissible, it may never find the goal, either by ending up in a dead end or skipping back and forth between two nodes.
## Metaheuristics
Metaheuristics are higher-level heuristics that optimise the use of heuristics. Specifically, they are used to guide the search for solutions in optimisation problems with large solution spaces. 

For example, [[Simulated Annealing|simulated annealing]] is a metaheuristic that optimises [[Hill climbing|hill climbing]] to reach a global maximum instead of a local maximum. 

[^1]: https://en.wikipedia.org/wiki/Heuristic_(computer_science)
