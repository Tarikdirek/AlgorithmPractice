function countPalindromSubsets(str) {
    let strArray = subsets(str.split(""));
    let count = 0;
    for (const element of strArray) {
        if (element && element.reverse() === element) {
            count++
        }
    }
    return count;
}

function subsets(arr) {
    let subsetss = [[]];

    for (let word of arr) {
        let newSubsets = []
        for (const subset of subsetss) {
            newSubsets.push([...subset, word]) 
        }
       subsetss = subsetss.concat(newSubsets)
    }
    return subsetss;
}

console.log(findPalindromSubsets("aaa"));

