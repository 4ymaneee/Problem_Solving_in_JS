function sumTwoSmallestNumbers(numbers) {  
    let lowest2number = numbers.sort((a,b) => a-b)
    return lowest2number[0] + lowest2number[1]
  }