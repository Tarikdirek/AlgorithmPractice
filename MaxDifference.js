function maxDifference(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
       for (let j = i+1; j < arr.length; j++) {
           if (arr[j]- arr[i] > max) {
                max = arr[j]- arr[i]
                
           }
       }
    }
    return max;
}

console.log(maxDifference([2, 3, 10, 6, 4, 8, 1]));
