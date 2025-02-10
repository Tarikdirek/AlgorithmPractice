function rearrangePosNeg(arr) {
    let pos = []
    let neg = []
    for (const e of arr) {
        if (e<0) {
            neg.push(e)
        }else{
            pos.push(e)
        }
    }
    return [...pos,...neg]
}

console.log(rearrangePosNeg([-1, 2, -3, 4, 5, -6]));