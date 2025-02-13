function commonCharacter(str1,str2) {
    let str1Arr = str1.split("");
    let str2Arr = str2.split("")
    let settedStr = new Set();
    let result = []
    for (const e of str1Arr) {
        settedStr.add(e)
    }

    settedStr.forEach((x) => {
        if (str2Arr.includes(x)) {
            result.push(x)
        }
        
    })

    return result;
  
}

console.log(commonCharacter("hello","world"));
