// Given an array of Integers, remove all the duplicates eg: [3, 4, 1, 5, 1, 9, 3] output [3, 4, 1, 5, 9]


const arr = [3, 4, 1, 5, 1, 9, 3];
const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

   
    for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
            isDuplicate = true;
            break;
        }
    }

   
    if (!isDuplicate) {
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr); 