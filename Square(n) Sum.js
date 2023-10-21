// Complete the square sum function so that 
// it squares each number passed into it 
// and then sums the results together.

function squareSum(numbers){
    let SquareSum = 0
    for(let i = 0; i < numbers.length; i++){
        SquareSum += numbers[i] * numbers[i]
    }
    return SquareSum
}

console.log(squareSum([1, 2, 2]))