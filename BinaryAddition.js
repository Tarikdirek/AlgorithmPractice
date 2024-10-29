function addBinary(a,b){
    let num = a+b;
    let arr = []
    while (num>1) {
        arr.push(`${num%2}`)
        num = Math.floor(num/2)
        
    }
    arr.push('1');
    return (`${a},${b} --> "${arr.reverse().toString().replaceAll(",","")}"`)
}

console.log(addBinary(5,9))