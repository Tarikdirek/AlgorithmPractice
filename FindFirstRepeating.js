function findFirstRepeating(arr) {
    let minKey = Infinity;
    let maxValue = 0;
    let repeatArr = new Map()
   for (let i = 0; i < arr.length; i++) {
       if (repeatArr.has(arr[i])) {
            repeatArr.set(arr[i],repeatArr.get(arr[i]) + 1)
       }else{
        repeatArr.set(arr[i],1)
       }
   }
   for (const [key,value] of repeatArr) {
        if (maxValue<value) {
            maxValue = value
            minKey = key
        }
   }
   return minKey
 }

 console.log(findFirstRepeating([2, 5, 1, 2, 3, 5, 1, 2, 4]));


 function longestIncreasingSubarray(arr) {
    let currentArr = [];
    let maxArr = []

    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i]> arr[i-1]) {
            currentArr.push(arr[i])
        }else{
            if (currentArr.length > maxArr.length) {
                maxArr = currentArr.slice()
            }
            currentArr= [arr[i]]
        }
        
    }
    if (currentArr.length > maxArr.length) {
        maxArr = currentArr.slice()
    }

    return maxArr
 }

 console.log(longestIncreasingSubarray([1, 2, 2, 3, 4, 1, 5, 6]));