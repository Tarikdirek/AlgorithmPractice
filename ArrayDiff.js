function arrayDiff(a, b) {
    return a.filter(element => !b.includes(element))
  }

  console.log(arrayDiff([1,2],[1]));