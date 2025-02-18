function sumMaxAndMinNum(arr) {
    let max = 0;
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]> max) {
            max = arr[i]
        }
        if (arr[i]<min) {
            min = arr[i]
        }
    }
    return [min,max]

}

console.log(sumMaxAndMinNum([5, 2, 9, 1, 7, 3]));
