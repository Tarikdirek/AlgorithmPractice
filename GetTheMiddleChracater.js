function getMiddle(s)
{ 
  //Code goes here!
  return s.length % 2 !== 0 ?  (`${s.split("")[s.length/2]}`) :(`${s.split("")[(s.length/2)-1]}${s.split("")[(s.length/2)]}`) 
}

console.log(getMiddle("testing"))