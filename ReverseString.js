function reverseString(string) {
    let strArray = string.split("");
    let reversedArray = []
    for (let i = strArray.length; i>0; i--) {
        reversedArray.push(strArray[i-1]);
    }
    return reversedArray.join("");
}

console.log(reverseString("merhaba"));
