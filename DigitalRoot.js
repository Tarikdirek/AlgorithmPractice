function digitalRoot(n) {
    // ...
   let res = n.toString();
   let count = 0;
   res.split("").forEach(e => {
        count+=parseInt(e)
        
   });
   return count>=10 ? digitalRoot(count) : count
  }

  console.log(digitalRoot(4627))