// create a function
// loop through m
//create a variable that sum the multiply result +=
// check if n * i  + n* i+1 ...  < m
// then return the final value
//check if m > 0

function sumMul(n, m) {
  let sumMultiply = 0;
  let multiply = 0;
  if(m > 0){
    for (let i = 1; i < m; i++) {
        multiply = n * i;
    
        if (multiply < m) {
          sumMultiply += multiply;
    
        }
      }
  }else {
    return 'INVALID'
  }
  return sumMultiply;
}

console.log(sumMul(4, -1));
