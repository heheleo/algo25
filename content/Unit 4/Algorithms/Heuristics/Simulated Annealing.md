A [[Heuristics#Metaheuristics|metaheuristic]] that aims to find a global maximum of a given function.
## Comparison to hill climbing
A simple [[Hill climbing|hill climb]] may not find the global maximum if there are multiple local maximums. Metaheuristics uses the neighbours of a solution as a way to explore the solution space. They prefer better neighbours, but they also accept worse neighbours to avoid getting stuck in a local maximum. If ran for a long enough time, it will find the global maximum.
## Abstract
Start with an initial solution and temperature. Temperature is constantly decreasing according to a [[#Cooling schedule|cooling schedule]]. Iteratively generate a new solution by perturbing the current solution.
- if the new solution is better than the current solution, its accepted as the new current solution (similar to [[Hill climbing|hill climbing]])
- if the new solution is worse than the current solution, it is accepted with a certain probability that **decreases with the temperature**.
	- this allows the algorithm to escape local minima and explore the solution step more thoroughly, whilst converging towards the global minimum
## Cooling schedule
Determines how quickly the temperature decreases. A common schedule is to reduce the temperature by a fixed fraction: $T_{n+1}=\alpha T_{k}$, where $\alpha$ is the cooling rate.

A slow cooling rate (e.g., 0.99) allows the algorithm to explore a larger portion of the search space, potentially finding global or near-global optima, but this can come at the cost of longer running time. On the other hand, a fast cooling rate (e.g., 0.2) can lead to exploitation of local optima and faster convergence, but may miss global optima if they exist in unexplored regions of the search space.
## Travelling salesman problem
The energy is given by some function, such as in the case of the [[Travelling Salesman Problem (TSP)|travelling salesman problem]], the energy is the total distance, and the change can be implemented by swapping two cities.
## Implementation

```python
import math
import random

# The acceptance probability function P(e, e_new, T)
# This function must tend to 0 as temperature (t) turns to 0
def P(e1, e2, t):
    try:
        return math.exp((e1-e2)/t)
    except OverflowError:
        return 1e+10

def simulated_annealing(state, steps, initialtemp, change_function, energy_function):
    beststate = state
    i = steps
    initialstate = state
    while i > 1:
        i -= 1
        t = initialtemp * i/steps
        newstate = change_function(state, init=initialstate)        
        if P(energy_function(state), energy_function(newstate), t) > random.randrange(0,100)/100:
            state = newstate
            if energy_function(state) < energy_function(beststate):
                beststate = state
    return beststate
```

To minimise an example problem, where the energy is $x^2+y^2$, this code can be used as follows
```python
import random

def energy(s):
    return sum([i*i for i in s])

def move(s, **kwargs):
    newx, newy = s[0], s[1]
    newx += random.randrange(-abs(kwargs["init"][0]*10), abs(kwargs["init"][0]*10))/100
    newy += random.randrange(-abs(kwargs["init"][1]*10), abs(kwargs["init"][1]*10))/100
    return newx, newy

simulated_annealing((100, 100), 1e+6, 1, move, energy)
```
## Visualisations


[^1]: https://en.wikipedia.org/wiki/Simulated_annealing
