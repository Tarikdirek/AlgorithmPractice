function pageCount(n, p) {
    // Write your code here
    let fromFront = Math.floor(p/2);
    let fromBack= Math.floor(n/2) - fromFront;
    return Math.min(fromFront,fromBack)
}

console.log(pageCount(6,2));