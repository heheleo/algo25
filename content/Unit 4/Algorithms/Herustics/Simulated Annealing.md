Simulated Annealing is a [[Heuristics#Metaheuristics|metaheuristic]] that aims to find a global maximum. 

Is an optimised version of [[Hill climbing]].

It can find global optimum if run slowly enough, useful for hard combinatorial problems.
Allows itself to escape local maxima by occasionally taking non-optimal mutations.

It operates by having a temperature, calculating a new state, then calculating a probability function $\text{P}(\text{E}_1,\text{E}_2,\text{T})$, usually set to be $e^{-\frac{\Delta E}{T}}$, where $\Delta E = \text{E}_2-\text{E}_1$. If $\text{P}(\text{E}_1,\text{E}_2,\text{T})$ is greater than a random value between zero and one, then it moves to the new state, otherwise it does not move. The temperature lowers after every step, meaning that it becomes increasingly less likely to move to a less optimal state.



The energy is given by some function, such as in the case of the [[Travelling Salesman Problem (TSP)]], the energy is the total distance, and the change can be implemented by swapping two cities.

### Implementation

```python
def P(e1, e2, t):
    try:
        return math.exp((e1-e2)/t)
    except OverflowError:
        return 1e+10

def lower(state, steps, initialtemp, change, energycalc):
    beststate = state
    i = steps
    initialstate = state
    while i > 1:
        i -= 1
        t = initialtemp * i/steps
        newstate = change(state, init=initialstate)        
        if P(energycalc(state), energycalc(newstate), t) > random.randrange(0,100)/100:
            state = newstate
            if energycalc(state) < energycalc(beststate):
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

lower((100, 100), 1e+6, 1, move, energy)
```