function catAndMouse(x, y, z) {

   if(Math.abs(x-z) <Math.abs(y-z)){
    return "Cat A";
   }else if(Math.abs(x-z) === Math.abs(y-z)){
    return "Mouse C";
    
   }else{
    return "Cat B";
   }

}

catAndMouse(1,2,3)