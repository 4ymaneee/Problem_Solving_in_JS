function expressionMatter(a, b, c) {
    let array = []
    firstCase =  a * (b + c)
    secondCase = a + b + c
    thirdCase = a * b * c
    fourthCase = a + b * c
    fifthCase = (a + b) * c
    array.push(firstCase,secondCase,thirdCase,fourthCase,fifthCase)
    let maxValue = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > maxValue){
            maxValue = array[i]
        }
    }
    return maxValue
  }

console.log(expressionMatter(5, 1, 3))