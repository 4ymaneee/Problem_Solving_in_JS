function squareOrSquareRoot(array) {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    let sqaureRoot = Math.sqrt(array[i]);
    let sqaure = array[i] * array[i];
    if (Number.isInteger(sqaureRoot)) {
      newarr.push(sqaureRoot);
    } else {
      newarr.push(sqaure);
    }
  }
  array = newarr
  return array
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))
