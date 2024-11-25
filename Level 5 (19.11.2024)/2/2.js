// Add an element in an array, don't add if its already present. 
// For eg in an array [5, 10, 3, 11, 18], if we add 3 it should allow as the element is already there. 

function Present(Arr, value) {
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] === value) {
            return Arr; 
        }
    }
    
    Arr.push(value); 
    return Arr; 
}

console.log(Present([5, 10, 3, 11, 18], 7));  


