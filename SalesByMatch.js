function sockMerchant(n, ar) {
    // Write your code here
    let mappedAr = new Map();
    let count = 0;
    for(let e of ar){
        if (mappedAr.has(e)) {
            mappedAr.set(e, mappedAr.get(e) + 1);
        }else{
            mappedAr.set(e,1)
        }
    }
    for(let [value,pair] of mappedAr){
        if (pair>1) {
            count += Math.floor(pair/2)
        }
    }
    return count
}

sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20])