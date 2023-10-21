// Sum Numbers
function sum(numbers) {
     return numbers.length != 0 ? numbers.reduce(function (acc, current) {
            return acc + current;
          }):0
}

console.log(sum([1, 5.2, 4, 0, -1]));
