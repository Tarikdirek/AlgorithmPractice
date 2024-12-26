let nums = [2,7,11,15]

var twoSum = function(target) {
    nums.filter((num,i,arr) => {
        arr.filter((n,j) => {
            if (num + n === target) {
                return [num,n]
            }
        })
    })
    
    
};

console.log(twoSum(9));
