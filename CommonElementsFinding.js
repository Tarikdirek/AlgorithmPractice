function commonElementsFinding(arr1,arr2) {
    let commons = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                commons.push(arr1[i])
            }
        }
    }
    return commons;
}

console.log(commonElementsFinding([1, 2, 3, 4], [3, 4, 5, 6]));
