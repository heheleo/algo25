---
aliases:
  - Pivot sort
---
Recursive, divide & conquer.

Worst-case performance: $O(n^{2})$ 
Best-case performance: $O(n log(n))$




![[Quicksort-example.gif]]
[Source](https://commons.wikimedia.org/wiki/File:Quicksort-example.gif)


![[Pasted image 20250212093130.png]]
[Source](https://www.geeksforgeeks.org/quick-sort-algorithm/)


Algorithms
```python
def swap(list:list, i:int, j:int):
    list[i],list[j]=list[j],list[i]

def partition(input:list,iLow:int,iHigh:int) -> int:
    oldPivotIndex = (iLow+iHigh)//2
    pivotValue = input[oldPivotIndex]

    # swaps the pivot number to the end of the list segment
    swap(input,oldPivotIndex,iHigh-1)

    i = iLow-1
    for j in range(iLow,iHigh-1):
        # checks if swapping is needed
        if input[j] < pivotValue:
            i+=1
            swap(input,j,i)
    
    # swaps the pivot number from its temporary spot to where it should be (i+1)
    newPivotIndex = i+1
    swap(input,newPivotIndex,iHigh-1)

    return newPivotIndex

# iLow and iHigh represent the indexes of the boundaries of the list segment to be partitioned
# note that the list is denoted by [ iLow : iHigh ), where number at index iHigh is not included
def quickSortRecursive(input:list,iLow:int,iHigh:int):

    # Checks that the list has atleast 2 items to sort before it recurs
    if iLow<iHigh-1:
        pivot=partition(input,iLow,iHigh)

        # use pivot +1 as pivot should be in right place, 
        # does not need to be sorted again
        quickSortRecursive(input,iLow,pivot)
        quickSortRecursive(input,pivot+1,iHigh)
        
def quickSort(input:list):
    # initialises the recursion
    quickSortRecursive(input,0,len(input))
```
Alternatively
```python
def quicksort(listToSort: list) -> list:
    if len(listToSort) <= 1:
        return listToSort
    pivot = len(listToSort) // 2
    i = 0
    while i < len(listToSort):
		# skips iteration if we try pivot the pivot
        if i == pivot:
            i += 1
            continue
        
        item = listToSort[i]
        pivotItem = listToSort[pivot]
        
        # if item needs to be to left of pivot
        if item < pivotItem and i > pivot:
	        # removes item, inserts it before pivot point
            listToSort.insert(pivot, listToSort.pop(i))
            # updates the index of pivot as it got shifed
            pivot += 1

		#if item needs to be to right of pivot
        elif item > pivotItem and i < pivot:
	        # 
            listToSort.insert(pivot, listToSort.pop(i))
            pivot -= 1
            i -= 1
        i += 1
    return quicksort(listToSort[:pivot]) + [pivotItem] + quicksort(listToSort[pivot+1:])
```