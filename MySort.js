function mySort(arr) {
    let minIndex = 0;

    for (let i = 0; i < arr.length - 1 ; i++) {
            minIndex = i
        for (let j = i+ 1 ; j < arr.length ; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        let temp = arr[i]
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }
    return arr
}

console.log(mySort([4, 2, 3, 1, 5]));
