function oddAndEvenNums(arr) {
    let evenNums = [];
    let oddNums = []
    for (const e of arr) {
        if(e%2 === 0){
            evenNums.push(e)
        }else{
            oddNums.push(e)
        }
    }
    return [...evenNums,...oddNums]
}

console.log(oddAndEvenNums([5, 2, 9, 8, 1, 4, 7]))