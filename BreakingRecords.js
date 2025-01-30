function breakingRecords(scores) {
    // Write your code here
    let lowest = scores[0];
    let lowestCount= 0;
    let higest = scores[0];
    let highestCount = 0 ;
    scores.forEach((num) => {
        if(num < lowest){ 
            lowest = num;
            lowestCount++
        };
        if(num > higest) {
            higest = num;
            highestCount++
        }
    })
    return [highestCount,lowestCount]

}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))