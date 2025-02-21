def mergesort(arr):
    if len(arr) <= 1:
        return arr 
    
    mid = len(arr) // 2 
    left = mergesort(arr[:mid]) 
    right = mergesort(arr[mid:])
    
    return mergearr(left, right)  

def mergearr(left, right):
    result = []
    i, j = 0, 0
    
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result


arr = [5, 2, 8, 4, 3, 7, 1, 6]
sorted_arr = mergesort(arr)
print(sorted_arr)
