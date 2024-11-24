
function selectionSort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      
        for (let j = i+1; j < n - 1; j++) {
    
            if (arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr));