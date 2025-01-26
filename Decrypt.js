function decryptPassword(s) {
    // Write your code here
    let strArr = s.split('');
    let count = 0;
    strArr.forEach((x) => {
        if(x === '0'){
           count++;
        }
    })
    let numArr = strArr.slice(0,count).reverse();
    console.log(numArr);
    let numCount = 0;
    strArr.map((x,index) => {
        
        if(x === '*'){
            let first = strArr[index-2];
            let second = strArr[index-1]
            strArr[index-2] = second;
            strArr[index-1] = first;
            strArr[index] =''
        }
        if (x === '0') {
            strArr[index] = numArr[numCount];
            numCount++;
        }
    })
    
    return strArr.slice(count).join('');
}

console.log(decryptPassword('51Pa*0Lp*0e'))