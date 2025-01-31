function birthday(s, d, m) {
    // Write your code here
    
    let count = 0;
    
    for(let i = 0 ; i<= s.length - m; i++ ){
        const subArrays = s.slice(i, i + m);
        let sum = subArrays.reduce((a,b) => a+b,0)
        if(sum === d){
            count++
        }
    }
    return count;
}

console.log(birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1],18,7));