let words = "is2 Thi1s T4est 3a";

let wordArr=words.split(" ");
let result =[]
for (let num = 1; num <= wordArr.length; num++) {
    result.push(" " + wordArr.find((e)=> e.includes(`${num}`)))
}




console.log(result)

