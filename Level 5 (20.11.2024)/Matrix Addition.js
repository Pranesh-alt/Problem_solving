// Matrix Addition using 2d Integer array


function addMatrices(matrix1, matrix2) {
    
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
         
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }

    console.log(result);
}


addMatrices([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
],[
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]);