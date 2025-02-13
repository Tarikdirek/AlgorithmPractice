function triangularNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        sum+=i
        if (sum === num) {
            return true
        }else if(sum>num){
            return false;
        }
        
    }
}

console.log(triangularNumber(28))