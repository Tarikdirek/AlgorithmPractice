function mostRepeatedNum(arr) {
    let mappedArr = new Map();
    let greatestValue = 0;
    let storedKey = 0;
    arr.forEach((x) => {
        if (mappedArr.has(x)) {
            mappedArr.set(x,mappedArr.get(x) + 1)
        }else{
            mappedArr.set(x,1)
        }
    })
    for (const [key,value] of mappedArr) {
        if (value> greatestValue) {
            greatestValue = value;
            storedKey = key
        }
    }
    return `${storedKey} sayısı ${greatestValue} kez tekrar etti.`
}

console.log(mostRepeatedNum([1, 3, 2, 3, 4, 1, 3, 2, 3, 4, 3, 5]));
