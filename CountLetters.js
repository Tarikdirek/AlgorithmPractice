function countLetters(arr) {
    let letterArr = arr.split("");
    let countedLetters = {}
   for (let i = 0; i < letterArr.length ; i++) {
       let currentLetter = letterArr[i]
       if (countedLetters[currentLetter]) {
        countedLetters[currentLetter]+=1
       }else{
        countedLetters[currentLetter] = 1
       }
    }
  
    return countedLetters;
}

console.log(countLetters("hello"));
