function bonAppetit(bill, k, b) {
    // Write your code here
    let total = bill.reduce((a,b) => a+b,0);
    let annaShare = (total - bill[k])/2
    if (b === annaShare) {
        console.log("Bon Appetit");
        
    }else{
        console.log(b-annaShare);
        
    }
    
}

console.log(bonAppetit());
