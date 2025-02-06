function getMoneySpent(keyboards, drives, b) {
    let maxSpent = 0;
    let budgetExceed = false; 

    keyboards.forEach((k) => {
        drives.forEach((d) =>{
                if(k + d > maxSpent && k + d <= b){
                maxSpent = k + d
            }
            if(k + d > b){
                budgetExceed = true;
            }
        })
        
    });
    if (maxSpent === 0 && budgetExceed === true) {
        maxSpent = -1;
    }
    
    return maxSpent;
}

console.log(getMoneySpent([3,1],[5,2,8],10));
