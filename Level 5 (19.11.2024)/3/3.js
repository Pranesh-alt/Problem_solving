// Given an two arrays, given to Set Union on the two arrays.
//  For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11].  Result [3, 1, 5, 7, 8, 10, 11]


function Union(Arr1,Arr2){
    let result=[];
    isDuplicate=false
    for(let i=0;i<Arr1.length;i++){
        for(let j=0;j<result.length;j++){
            if(Arr1[i]===result[j]){
                isDuplicate=true;
                break;
            }
        }
        if(!isDuplicate){
            result.push(Arr1[i]);
        }
    }
    for(let i=0;i<Arr2.length;i++){
        for(let j=0;j<result.length;j++){
            if(Arr2[i]===result[j]){
                isDuplicate=true;
                break;
            }
        }
        if(!isDuplicate){
            result.push(Arr2[i]);
        }
    }
    console.log(result);
}
Union([3, 1, 5, 7, 8],[5, 1, 8, 10, 11])

