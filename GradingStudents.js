let grades = [36,
    6,
    100,
    25,
    97,
    24,
    25,
    70,
    50,
    71,
    30,
    14,
    28,
    100,
    3,
    26,
    61,
    100,
    50,
    41,
    5,
    3,
    28,
    34,
    0]

let finalGrades = grades.map((x) => {
   if(x%10 < 5){
    return x = x + (5 - (x%10))
   }else{
    return x = x + (10 - (x%10))
   }
})

let result = grades.map((x,i) => {
    if(finalGrades[i]-x < 3 && x >= 38){
       return x = finalGrades[i]
    }else{
        return x
    }
})

console.log(result)

