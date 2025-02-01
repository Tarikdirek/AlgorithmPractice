function migratoryBirds(arr) {
    // Write your code here
    let types = new Map();

    arr.forEach((type) => {
        if (types.has(type)) {
           types.set(type,types.get(type)+1);
        }else{
            types.set(type,1)
        }
    })
    let maxCount = 0;
    let minType = Infinity;

    types.forEach((count, type) => {
        if (count > maxCount) {
            maxCount = count;
            minType = type;
        } else if (count === maxCount && type < minType) {
            minType = type; 
        }
    });

    return minType;

    
    
}
console.log(migratoryBirds([1,4,4,5,5,3]));
 

 
