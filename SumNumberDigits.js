function sumNumberDigits(num) {
    let sumNum = 0;
    while (num>0) {
      sumNum += num%10
       num  = Math.floor(num/10)  
    }
    return sumNum;
}

console.log(sumNumberDigits(645455));
