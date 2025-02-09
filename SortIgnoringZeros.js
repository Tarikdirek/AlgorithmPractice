function sortIgnoringZeros(arr) {
    let nonZeroArr = []
    let zeroIndex = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            nonZeroArr.push(arr[i])
        }else{
            zeroIndex.push(i)
        }
    }

    for (let i = 0; i < nonZeroArr.length-1; i++) {
        for (let j = 0; j < nonZeroArr.length-i-1; j++) {
            if (nonZeroArr[j]> nonZeroArr[j+1]) {
                [nonZeroArr[j],nonZeroArr[j+1]] = [nonZeroArr[j+1],nonZeroArr[j]]
            }
        }
    }

    let result = new Array(arr.length).fill(null);
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
       if (zeroIndex.includes(i)) {
            result[i] = 0
       }else{
            result[i] = nonZeroArr[index];
            index++
       }
    }
    


    return result

}

console.log(sortIgnoringZeros([4, 0, 2, 3, 0, 1, 5]));
