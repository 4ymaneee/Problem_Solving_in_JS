function sumMul(n, m) {
  let sum = 0;
  if (m > 0) {
    for (let i = n; i < m; i += n) { 
      sum += i ;
    }
  } else {
    return "INVALID";
  }
  return sum;
}

console.log(sumMul(2, 9));
