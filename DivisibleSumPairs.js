function divisibleSumPairs( k, ar) {
    // Write your code here
    let subArr = []
    let result = []
    let count= 0;
    function recursiveSubArry(index = 0) {
        if (subArr.length === 2) {
            result.push([...subArr])
            return;
        }
        for (let i = index; i < ar.length; i++) {
            subArr.push(ar[i]);
            recursiveSubArry(i+1)
            subArr.pop()
        }

        return result;
    }    
    recursiveSubArry()
    result.forEach((sub) => {
        if(sub.reduce((a,b) => a+b,0) % k === 0){
            count++
        }
    })
    return count;
    
}

console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]));
 