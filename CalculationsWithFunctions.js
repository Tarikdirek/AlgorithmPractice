function zero(operation) {
    if (!operation) {
        return 0;
      }
     return handleOperation(operation,0)
}
function one(operation) {
  if (!operation) {
    return 1;
  }
  return handleOperation(operation,1)
}
function two(operation) {
    if (!operation) {
        return 2;
      }
      return   handleOperation(operation,2)
}
function three(operation) {
    if (!operation) {
        return 3;
      }
      return   handleOperation(operation,3)
}
function four(operation) {
    if (!operation) {
        return 4;
      }
      return   handleOperation(operation,4)
}
function five(operation) {
    if (!operation) {
        return 5;
      }
      return   handleOperation(operation,5)
}
function six(operation) {
    if (!operation) {
        return 6;
      }
      return    handleOperation(operation,6)
}
function seven(operation) {
    if (!operation) {
        return 7;
      }
      return   handleOperation(operation,7)
}
function eight(operation) {
    if (!operation) {
        return 8;
      }
      return   handleOperation(operation,8)
}
function nine(operation) {
    if (!operation) {
        return 9;
      }
      return handleOperation(operation,9)
}

function handleOperation(oprParam,num) {
    let op = oprParam;
    let [operand, secondNumber] = op.split("");
  
    return operand === "+"
      ? Math.floor(num + Number(secondNumber))
      : operand === "-"
      ? Math.floor(num - Number(secondNumber))
      : operand === "*"
      ? Math.floor(num * Number(secondNumber))
      : operand === "/"
      ? Math.floor(num / Number(secondNumber))
      : 0;
}

function plus(secondNum) {
  return `+${secondNum}`;
}
function minus(secondNum) {
  return `-${secondNum}`;
}
function times(secondNum) {
  return `*${secondNum}`;
}
function dividedBy(secondNum) {
  return `/${secondNum}`;
}

console.log(eight(times(nine())));
