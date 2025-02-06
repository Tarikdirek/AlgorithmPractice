function countingValleys( path) {
    // Write your code here
    let seaLevel = 0;
    let underSeaLevel = false;
    let pathArr = path.split("");
    let countValley = 0;

    for (let i = 0; i < pathArr.length; i++) {
        if (pathArr[i] === 'D') {
            seaLevel--
            if( seaLevel === -1){
                underSeaLevel = true
            }
        }else{
            seaLevel++
            if (underSeaLevel && seaLevel === 0) {
                underSeaLevel = false
                countValley++
        }
        }
       
    }
    return countValley;
}

console.log(countingValleys('DDUUDDUDUUUD'));
