var numb = [1,-4,7,12];
var result = 0;

var sumOfPositive = () => {
    numb.forEach(element => {
        if (element<0) {
            result = result + 0;
        }else{
            result = result + element;
        }
    });
    return result;
}

console.log(sumOfPositive());