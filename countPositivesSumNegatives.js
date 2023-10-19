// Return an array, where the first element is
// the count of positives numbers and the second
// element is sum of negative numbers.

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) {
      return [];
    }
  
    let countPositiveNumbers = 0;
    let sumNegativeNumbers = 0;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countPositiveNumbers++;
      } else if (input[i] < 0) {
        sumNegativeNumbers += input[i];
      }
    }
  
    return [countPositiveNumbers, sumNegativeNumbers];
}
  

console.log(
  countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
);
