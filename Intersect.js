function intersect(arr1,arr2) {
    let intersectNums = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                intersectNums.push(arr1[i])
            }
        }
    }
    return intersectNums;
}

console.log(intersect([1, 2, 3, 4], [3, 4, 5, 6]));
