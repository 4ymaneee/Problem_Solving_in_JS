function divisibleBy(numbers, divisor){
    let newArr = []
    let divisble = 0
    for(let i = 0; i < numbers.length; i++){
        divisble = numbers[i] / divisor
        if(Number.isInteger(divisble) == true){
            newArr.push(numbers[i])
        }
    }
    return newArr
}

console.log(divisibleBy([1,2,3,4,5,6], 3))


