function sortingArray(ar) {
    let n = ar.length;
    let nonZero = []
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
               if (ar[j]>ar[j+1] && ar[j] !== 0) {
                    [ar[j],ar[j+1]] = [ar[j+1],ar[j]]
               }
        }
        
    }
    for (const element of ar) {
        if (element !== 0) {
            nonZero.push(element)
        }
    }
    return nonZero
}
console.log(sortingArray([15,89,57,0,47,24,44,55,12]))