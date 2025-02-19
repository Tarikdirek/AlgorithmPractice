function armstrongNumber(num) {
    let sumNum = 0;
    let calcNum = num;
    while (calcNum>0) {
        let leftNum = calcNum % 10;
        calcNum = Math.floor(calcNum/10);
        sumNum = sumNum + (leftNum * leftNum * leftNum)
    }
    if (sumNum === num) {
        return true
    }else{
        return false
    }

}

console.log(armstrongNumber(15));
