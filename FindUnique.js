function findUnique(arr) {
    let mappedArr = new Map ();
    for (const e of arr) {
        if (mappedArr.has(e)) {
            mappedArr.set(e,mappedArr.get(e) + 1)
        }else{
            mappedArr.set(e,1)
        }
    }
    for (const [key,value] of mappedArr) {
        if (value === 1) {
            return key
        }
    }
}

console.log(findUnique([2, 3, 5, 4, 5, 3, 4])); 