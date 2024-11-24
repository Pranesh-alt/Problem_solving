function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j;
     
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j]; 
        }
        arr[j + 1] = current; 
    }
    return arr;
}


const array = [5, 3, 8, 4, 2];

console.log("Sorted array:", insertionSort(array));
