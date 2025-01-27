function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b) => a - b)
    console.log(arr.slice(0,4).reduce((a,b) => a + b,0), arr.slice(1,6).reduce((a,b) => a + b,0)) 
}
