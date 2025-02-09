function repeatedNumber(arr) {
   
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
                if(arr[i] === arr[j]){
                    
                     return arr[i]
                }
        }
    }
}

console.log(repeatedNumber([3, 1, 4, 2, 5, 3, 7, 4]));
