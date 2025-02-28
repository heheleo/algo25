> [!note]- If expressions (not if statements) - "inline ifs"
> Different to if **statements** (main difference is the use of a colon, ':'). This syntax always requires an else statement. Similar to conditional (ternary) operators.
> Syntax: `<value_if_true> if <condition> else <value_if_false>`
> ```python
> n = -5
> res = "Positive" if n > 0 else "Negative" if m < 0 else "Zero"
> 
> # The above expression can be written as
> res = "Positive" if n > 0 else ("Negative" if n < 0 else "Zero")
> ```

> [!note]- Lambda functions
> Anonymous functions (function without a name). It would be named if it is assigned.
> Useful for reducing complexity and repetition.
> 
> Syntax: `lambda <arguments>: <expression>`
> ```python
> # check if number is positive, negative or zero
> classify = lambda num: "Positive" if num > 0 else "Negative" if num < 0 else "Zero"
> 
> classify(5) # Positive
> classify(-5) # Negative
> classify(0) # Zero
> 
> # multiple parameters
> calc = lambda x, y: (x + y, x * y)
> calc(3, 4) # (7, 12)
> 
> # callbacks
> n = [1, 2, 3, 4, 5, 6]
> list(filter(lambda x: x % 2 == 0, n)) # [2, 4, 6]
> list(map(lambda x: x * 2, n)) # [2, 4, 6, 8, 10, 12]
> ```




