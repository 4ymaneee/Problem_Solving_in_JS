function findMultiples(integer, limit) {
  let array = [];
  let result = 0;
  for (let i = 1; i <= limit; i++) {
    result = integer * i;

    if (result <= limit) {
      array.push(integer * i);
    }
  }
  return array;
}

console.log(findMultiples(5, 25));
