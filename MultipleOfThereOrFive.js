let sum = 0;

function findMultipleOfThereOrFive(num) {
    
  for (let i = 0; i < num; i++) {
    if (num < 0) {
      return (sum = 0);
    }
    if (i % 3 && i % 5 === 0) {
        sum+=i;
        continue
    }
    i % 3 === 0 ? sum+=i : sum+=0
    i % 5 === 0 ? sum+=i : sum+=0
    
  }
}

findMultipleOfThereOrFive(10);
console.log(sum);