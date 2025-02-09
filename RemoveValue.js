function removeValue(arr,value) {
    let removedValueArr = []
    for (const e of arr) {
        if (e !== value) {
            removedValueArr.push(e)
        }
    }

    return removedValueArr
    
}

console.log(removeValue([1, 2, 3, 4, 5, 3, 6, 3],3));
