const getNumberOfDigits = (num) => {

    var count = 0;
    while(num>0){
        num = Math.floor(num/10);
        count++
    }

    var result = count ;
    return result;
}

console.log(getNumberOfDigits(546454))