const spiningWords = (word)=>{
    let wordArr = word.split(" ");
    let result =""
    
    wordArr.forEach(e => {
        e.length >= 5 ? result+= e.split("").reverse().join("") + " " : result+=e + " "
    });
    return result.trim();
}

console.log(spiningWords("Just kidding there is still one more"))
