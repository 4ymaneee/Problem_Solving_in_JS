function isDivisible(n, x, y) {
  let isDivisibleByX = n / x;
  let isDivisibleByY = n / y;
  if (
    typeof (isDivisibleByX, isDivisibleByY) === "number" &&
    Number.isInteger(isDivisibleByX) &&
    Number.isInteger(isDivisibleByY)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(3, 1, 2));
