function findMissingPositive(arr) {
    let posNums = []
    for (const e of arr) {
        if (e>0) {
            posNums.push(e)
        }
    }
    
    for (let i = 0; i < posNums.length - 1; i++) {
        for (let j = 0; j < posNums.length - i - 1; j++) {
            if (posNums[j]> posNums[j+1]) {
                [posNums[j], posNums[j+1]] = [posNums[j+1],posNums[j]]
            }
        }
    }
    let result = 0;
      for (let i = 1; i < Infinity ; i++) {
        if (!posNums.includes(i) ) {
            result = i
            break
        }
    }

    return result
}
console.log(findMissingPositive([7, 8, 9, 11, 12]));
console.log(findMissingPositive([1, 2, 0])); 
console.log(findMissingPositive([3, 4, -1, 1]));  
