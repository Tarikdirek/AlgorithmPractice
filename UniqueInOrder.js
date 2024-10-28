function UniqueInOrder(iterable) {
    let arr = []
    for (let i = 0; i < iterable.length; i++) {
         if(i === 0 || iterable[i] !== iterable[i-1] ) arr.push(iterable[i]) 
    }
    return arr;
}

console.log(UniqueInOrder("AAAABBBCCCDEEAABB"))

//(['A','B','C','D','E','A','B'])