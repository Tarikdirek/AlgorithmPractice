//UNOPTIMIZED

/*function climbingLeaderboard(ranked, player) {
    // Write your code here
    let queuedRank = new Map()
    let count = 1;
    let newRank = []
    for (let i = 0; i < ranked.length; i++) {
        if (queuedRank.has(ranked[i])) {
            continue;
        }else{
             queuedRank.set(ranked[i],count) ;
             count++  
        }
    } 
    player.forEach((x,i) => {
        for (const [key,value] of queuedRank) {
            if (x>key && !newRank[i]) {
                newRank.push(value)
                break;
            }else if(x === key && !newRank[i]){
                newRank.push(value)
                break
            }else if(x<key){
                if (newRank[i]) {
                    newRank[i] = value + 1;
                }else{
                    newRank.push(value+1);
                } 
            }
        }
    })
    return newRank;
}

console.log(climbingLeaderboard([100,90,90,80,75,60],[55,65,77,90,102]))*/

//OPTIMIZED

function climbingLeaderboard(ranked, player) {
    let uniqueRanked = [...new Set(ranked)];
    let newRank = [];
    let index = uniqueRanked.length - 1; 

 
    for (let score of player) {
        while (index >= 0 && score >= uniqueRanked[index]) {
            index--; 
        }
        newRank.push(index + 2); 
    }

    return newRank;
}

console.log(climbingLeaderboard([100,90,90,80,75,60], [55,65,77,90,102]));

