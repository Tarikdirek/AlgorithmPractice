function getCount(str) {
    let count = 0;
    let arr = str.split("");
    arr.forEach(e => {
      e === 'a' || e === 'e' || e === 'i'|| e === 'o' || e === 'u' ? count++ : count=count+0
    })
    return count;
  }
