function findOutlier(integers) {
    
    let firstThree = integers.slice(0, 3);
    let majorityEven = firstThree.filter(num => num % 2 === 0).length >= 2;
   
    for (let num of integers) {
      
      if (majorityEven && num % 2 !== 0) {
        return num;
      }
      if (!majorityEven && num % 2 === 0) {
        return num;
      }
    }
  }

console.log(findOutlier([1,1,1,0,1,1]))