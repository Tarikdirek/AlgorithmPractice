function shiftZeros(ar) {
    let zeros = []
    let numbers = []

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === 0) {
            zeros.push(ar[i])
        }else{
            numbers.push(ar[i])
        }
        
    }
    return [...numbers,...zeros]
}

console.log(shiftZeros([0, 3, 1, 0, -2, 4, 0, 5]));
