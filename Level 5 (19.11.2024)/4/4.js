// Given an two arrays, given to Set Intersection on the two arrays. For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11]. Result [1, 5, 8]


function Intersection(Arr1, Arr2) {
    let result = [];

    for (let i = 0; i < Arr1.length; i++) {
        for (let j = 0; j < Arr2.length; j++) {
            if (Arr1[i] === Arr2[j]) {
               
                let isDuplicate = false;
                for (let k = 0; k < result.length; k++) {
                    if (result[k] === Arr1[i]) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    result.push(Arr1[i]);
                }
                break; 
            }
        }
    }

    console.log(result);
}


Intersection([3, 1, 5, 7, 8], [5, 1, 8, 10, 11]);
