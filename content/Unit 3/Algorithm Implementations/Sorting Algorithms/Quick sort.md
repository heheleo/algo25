---
aliases:
  - Pivot sort
---
A recursive, [[Algorithm types#Divide-and-conquer|divide-and-conquer]] sorting algorithm.
## Visualisation
![[Quicksort-example.gif]]
[Source](https://commons.wikimedia.org/wiki/File:Quicksort-example.gif)
![[pivotsort_diagram.png]]
[Source](https://www.geeksforgeeks.org/quick-sort-algorithm/)
## Efficiency
Worst-case performance: $O(n^{2})$ 
Best-case performance: $O(n \log(n))$
## Implementation
> [!note]- Python 3 (recursion)
> ```python
> def swap(list:list, i:int, j:int):
>     list[i],list[j]=list[j],list[i]
> 
> def partition(input:list,iLow:int,iHigh:int) -> int:
>     oldPivotIndex = (iLow+iHigh)//2
>     pivotValue = input[oldPivotIndex]
> 
>     # swaps the pivot number to the end of the list segment
>     swap(input,oldPivotIndex,iHigh-1)
>   - 
> 	#Note: i here keeps track of the item 1 before where pivot should now go
> 	
>     i = iLow-1
>     for j in range(iLow,iHigh-1):
>         # checks if swapping is needed
>         if input[j] < pivotValue:
>         # if swapping is needed, 
>         # it will swap the current j item with the item one after i
>             i+=1
>             swap(input,j,i)
>     
>     # swaps the pivot number from its temporary spot to where it should be (i+1)
>     newPivotIndex = i+1
>     swap(input,newPivotIndex,iHigh-1)
> 
>     return newPivotIndex
> 
> # iLow and iHigh represent the indexes of the boundaries of the list segment to be partitioned
> # note that the list is denoted by [ iLow : iHigh ), where number at index iHigh is not included
> def quickSortRecursive(input:list,iLow:int,iHigh:int):
> 
>     # Checks that the list has atleast 2 items to sort before it recurs
>     if iLow<iHigh-1:
>         pivot=partition(input,iLow,iHigh)
> 
>         # use pivot +1 as pivot should be in right place, 
>         # does not need to be sorted again
>         quickSortRecursive(input,iLow,pivot)
>         quickSortRecursive(input,pivot+1,iHigh)
>         
> def quickSort(input:list):
>     # initialises the recursion
>     quickSortRecursive(input,0,len(input))
> ```

> [!note]- Python 3 (recursion, Kim's method)
> ```python
> def quicksort(listToSort: list) -> list:
>     if len(listToSort) <= 1:
>         return listToSort
>     pivot = len(listToSort) // 2
>     i = 0
>     while i < len(listToSort):
> 		# skips iteration if we try pivot the pivot
>         if i == pivot:
>             i += 1
>             continue
>         
>         item = listToSort[i]
>         pivotItem = listToSort[pivot]
>         
>         # checks if the item is on the right side of pivot when it should be left
>         if item < pivotItem and i > pivot:
> 	        # removes item, inserts it before pivot point
> 	        
> 	        # as item is to right of pivot, its removal wont affect position of 
> 	        # the pivot
> 		    #inserts item before the pivot
>             listToSort.insert(pivot, listToSort.pop(i))
>             
>             # updates the index of pivot as item got inserted, moving pivot
>             pivot += 1
> 
> 		# checks if the item is on the left side of pivot when it should be right
>         elif item > pivotItem and i < pivot:
> 	        #removes the item from list
> 	        #because item was to left of pivot, when it is removed
> 	        #pivot will move left by one
> 	        #when its re added on old index of pivot, it will now be right of pivot
>             listToSort.insert(pivot, listToSort.pop(i))
>             #adjusts pivot to reflect new index of pivot
>             pivot -= 1
>             #moves i to the left by one to make sure no number was missed
>             #this is bc all numbers to right of the old item position was moved 
>             i -= 1
>         i += 1
>     return quicksort(listToSort[:pivot]) + [pivotItem] + quicksort(listToSort[pivot+1:])
> ```


---
### Time analysis




There are 2 branches per call of quick sort.

Worst case: pivot is at the very left or very right


$$T(n) =  T(n-1) +n-1 $$
$$
T(n) = \sum_{i=1}^{n-1} (n-1) = (n-1)^2 = O(n^2)

$$

Best case, pivot is in exact middle
$$T(n) =  2T(\frac{n}{2}) +n-1 $$


$$O(n \log n)$$