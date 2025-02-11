function findMissing(arr) {
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i-1] !== i) {
            return i
        }
    }
}
console.log(findMissing([1, 2, 4, 5]));
