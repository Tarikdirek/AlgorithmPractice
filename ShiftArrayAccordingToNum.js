function shiftArrayAccordingToNum(arr,num) {
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length - num; i++) {
        leftArr.push(arr[i])
    }
    for (let i = arr.length - num; i < arr.length; i++) {
        rightArr.push(arr[i]);
    }
    return [...rightArr,...leftArr]
    
}

console.log(shiftArrayAccordingToNum([1, 2, 3, 4, 5], 2));
