function colGuess(num) {
    let count = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num /2
        }else{
            num = 3*num + 1
        }
        count++
    }
    return count;
}

console.log(colGuess(12));
