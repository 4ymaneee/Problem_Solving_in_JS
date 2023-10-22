function findMultiples(integer, limit) {
  let array = [];
  for (let i = 1; i <= limit; i++) {
    let result = integer * i;
    if (result <= limit) {
      array.push(result);
    }
  }
  return array;
}

console.log(findMultiples(5, 25));
