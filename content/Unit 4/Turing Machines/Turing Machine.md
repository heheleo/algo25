One of the earliest mathematical models of computation describing an abstract machine that manipulates symbols on an infinite strip of tape according to a table of rules. It is capable of implementing any computer algorithm.[^1] 
## Important Facts
- A Turing Machine can solve **any computable problem**. This is proven by Turing and Church.
- A Turing Machine is represented by a [[State diagram (Turing machine)|state diagram]].
- The Turing Machine is used to prove that both the [[Halting Problem]] and [[Entscheidungsproblem]] is undecidable.
- It was created because Turing needed a way to precisely define what an "algorithm" or "mechanical procedure" is back in the 20th century.
- A Turing Machine is not designed to be efficient, just simple.
## Construction
Every part of the machine and its actions is *finite*, and *discrete*, except for the unlimited amount of tape and runtime.
- a **tape alphabet** containing a finite, non-empty set of symbols
- an **infinite memory tape** divided into discrete cells, each of which can hold a single symbol drawn from the tape alphabet
- a **head** where, at any point in the machines operation, is positioned over one of the cells. It can read and write symbols on the tape and move the tape left and right one cell at a time. (in some models, the head moves and the tape is stationary, VCAA often does this)
- a **set of states** which is finite and non-empty
- a **state register** that stores the state of the machine, one of finitely many
- a **start state** which is what the state register is initialised with
- a finite **table of instructions** that, given the state of the machine and the symbol it is the head is currently reading, tells the machine to do the following *in sequence*
	1. either erase or write a symbol
	2. move the head
	3. assume the same or a new state as prescribed
## Formalisms
A (one-tape) Turing machine can be formally defined as a 7-tuple $M=\langle Q,\Gamma,b,\Sigma,\delta,q_{0},F \rangle$ where:
- $\Gamma$ denotes the tape alphabet
- $b \in \Gamma$ is the blank symbol (only symbol allowed to occur on the tape infinitely at any step within computation)
- $\sum \subseteq \Gamma\setminus \{ b \}$ is the input symbols, which is the set of symbols allowed to appear in the initial tape contents
- $Q$ is the set of states
- $q_{0} \in Q$ is the initial state
- $F \subseteq Q$ is the set of final states
	- the initial tape contents is said to be **accepted** by $M$ if it eventually halts in a state from $F$
- $\delta:(Q\setminus F) \times \Gamma \to Q \times \Gamma \times \{ L,R \}$ is the transition function, which specifies the next state transited from the current state, which symbol to overwrite the current symbol pointed by the head, and the next head movement. 
[^1]: https://en.wikipedia.org/wiki/Turing_machine
