function twoDecimalPlaces(n) {
    let roundNum = n.toFixed(2)
    return +roundNum
  }

console.log(twoDecimalPlaces(4.653725356))