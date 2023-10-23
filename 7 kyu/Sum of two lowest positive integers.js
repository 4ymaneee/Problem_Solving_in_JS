// Create a function that returns the sum of the two lowest positive
//  numbers given an array of minimum 4 positive integers. No floats
//   or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77],
//  the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.



//Methode 1
function sumTwoSmallestNumbers(numbers) {  
    let lowest2number = numbers.sort((a,b) => a-b)
    return lowest2number[0] + lowest2number[1]
  }


// Methode 2
function sumTwoSmallestNumbers(numbers) {  
    let firstlowestNumber = Infinity
    let secondLowestNumber = Infinity
    
    for(num in numbers){
        if(firstlowestNumber > numbers[num]){
 
            firstlowestNumber = numbers[num]
        }else if(secondLowestNumber > numbers[num]){
            secondLowestNumber = numbers[num]
        }
    }

    return firstlowestNumber + secondLowestNumber
  }

console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))
