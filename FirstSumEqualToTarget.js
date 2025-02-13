function firstSumEqualToTarget(arr,target) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i+1] === target) {
            return [arr[i],arr[i+1]]
        }
    }
}

console.log(firstSumEqualToTarget([11,2,7],9));


function maxSequantalSumTwoNumber(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i+1] > sum) {
            sum = arr[i] + arr[i+1]
        }
    }
    return sum;
}

console.log(maxSequantalSumTwoNumber([2, -3, 4, -1, -2, 1, 5, -3]));
