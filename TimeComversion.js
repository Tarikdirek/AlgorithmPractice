function timeConversion(s) {
    // Write your code here
    let arr = s.split('');
    if(arr.includes('A')){
       let num = Number(arr.slice(0,2).join(''))
        if(num  === 12) {
            arr[0] = '0'
            arr[1] = '0'
        }
        arr.pop();
        arr.pop();
    }else if(arr.includes('P')){
       let num = Number(arr.slice(0,2).join(''))
        if(num === 12) {
        }else{
            num = num + 12
        arr.splice(0,2,num.toString()) 
        }
       arr.pop()
       arr.pop()
    }
    return arr.join('')
}

console.log(timeConversion("12:00:00AM"))