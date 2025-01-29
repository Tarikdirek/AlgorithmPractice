function countApplesAndOranges(samHouseStart, samHouseEnd, locationOfApple, locationOfOrange, apples, oranges) {
    // Write your code here
    let applesDis = apples.map((x) => locationOfApple +x );
    let orangeDis = oranges.map((y) => locationOfOrange + y);
    let countApple = 0;
    let countOrange = 0;

    applesDis.forEach((x,i) => {
        if (samHouseStart <= x && x <= samHouseEnd) {
            countApple++
        }
    })

    orangeDis.forEach((y) => {
        if (samHouseStart <= y && y <= samHouseEnd) {
            countOrange++
        }
    })
    console.log(countApple);
    console.log(countOrange)
}

countApplesAndOranges(2,3,1,5,[-2],[-1])