function findMultiples(integer, limit) {
  let array = [];
  for (let i = 1; i <= limit; i++) {
    let multiply = integer * i;
    if (multiply <= limit) {
      array.push(multiply);
    }
  }
  return array;
}

console.log(findMultiples(5, 25));
