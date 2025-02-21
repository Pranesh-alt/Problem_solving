def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

arr = [3, 6, 8, 10, 1, 2, 1]
sorted_arr = quick_sort(arr)
print(sorted_arr)









pivot = arr[-1]
i=0
j=i-1
if(pivot<=arr[i]):
    i+=1
    j+=1
elif(pivot>arr[i]):
    j+=1
    arr[i],pivot = pivot,arr[i]
    i+=1
    
    
    
    
    
    
    