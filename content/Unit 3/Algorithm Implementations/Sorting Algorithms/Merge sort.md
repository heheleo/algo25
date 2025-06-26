A recursive, [[Algorithm types#Divide-and-conquer|divide-and-conquer]] sorting algorithm.
## Time complexity
Worst-case performance: $O(n\log(n))$ 

![[Merge-sort-example-300px.gif]]
## Abstract
Merge sort operates by recursively splitting the list into half until it is divided into the smallest possible unit, then merging them back together from the ground up through comparison.
## Implementation
> [!note]- Python 3 (recursion)
> ```python
> def mergesort(list):
>     if len(list) <= 1:
>         return list
>     mid = len(list) // 2
>     left = list[:mid]
>     right = list[mid:]
>     left = mergesort(left)
>     right = mergesort(right)
>     return merge(left, right)
> 
> def merge(left: list, right: list):
>     result = []
>     finallen = len(left) + len(right)
>     while len(result) < finallen:
>         if len(left) == 0:
>             result += right
>             break
>         if len(right) == 0:
>             result += left
>             break
>         if left[0] < right[0]:
>             result.append(left[0])
>             left.pop(0)
>         else:
>             result.append(right[0])
>             right.pop(0)
>     return result
> ```

> [!note]- Python 3 (recursion, Kim's method)
> ```python
> # MODE : "asc" or "desc"
> def sort(input:list, mode:str) -> list:
>     length = len(input)
>     if length <= 1:
>         return input
>     middle_index = length//2
>     leftList=input[:middle_index]
>     rightList=input[middle_index:]
>     
>     sortedLeftList = sort(leftList,mode)
>     sortedRightList = sort(rightList,mode)
> 
>     llength = len(sortedLeftList)
>     rlength=len(sortedRightList)
> 
>     result=[]
>     li,ri=0,0
>     for i in range(length):
>         if li >= llength:
>             result.append(sortedRightList[ri])
>             ri+=1
>             continue
> 
>         if ri >= rlength:
>             result.append(sortedLeftList[li])
>             li+=1
>             continue
>             
>         priority=""
>         if mode =="asc":
>             if sortedLeftList[li] > sortedRightList[ri]:
>                 priority = "r"
>             else:
>                 priority="l"
>         elif mode =="desc":
>             if sortedLeftList[li] < sortedRightList[ri]:
>                 priority = "r"
>             else:
>                 priority="l"
> 
>         if priority=="r":
>             result.append(sortedRightList[ri])
>             ri+=1
>             continue
>         else:
>             result.append(sortedLeftList[li])
>             li+=1
>             continue
>     return result
> 
> ```


---

### Time analysis



Lets discuss worst case
$n=2^l$, where $n$ is input lengh, and $l$ is number of "layers" merge sort is called
such that $l = log_2 (n)$
each comparison is $O(n)$
thus overall is $O(n log n)$

With master algo:

Each layer, the worst case is something like
`[1,3,5]` merged with `[2,4,6]` in alternating order, as such there is $n-1$ checks during the merge process
There are 2 branches per call of merge sort.
Thus
$$T(n) = 2 \cdot T \biggl( \frac{n}{2} \biggl) + (n-1)$$

With  [[Master Theorem]]
$$T(n)=aT(\frac{n}{b})+kn^c$$

Disregarding constant terms:
$$a=2,b=2,k=1,c=1$$

As 
$$a=b^c  \text{  as  } 2=2^1$$

$$
\therefore T(n)=O(n \log n)
$$


*Best case is* $T(n) = 2 \cdot T ( \frac{n}{2} ) + \frac{n}{2}$
