// In this little assignment you are given a string of space 
// separated numbers, and have to return the highest and lowest number.


//Methode 1
function highAndLow(numbers){
    let strToArr = numbers.split(' ').sort((a,b) => a-b)
    return strToArr[strToArr.length -1] + ' ' + strToArr[0] 
  }

console.log(highAndLow("10 15 17 -11 3 4"))


//Methode 2
function highAndLow(numbers){
    let arrayOfNumbers = numbers.split(' ')
    let highestNumber = +arrayOfNumbers[0]
    let LowestNumber = +arrayOfNumbers[0]
        for(let i = 0 ; i < arrayOfNumbers.length; i++){
            if(highestNumber < +arrayOfNumbers[i]){
                highestNumber = +arrayOfNumbers[i]
            }
            if(LowestNumber > +arrayOfNumbers[i]){
                LowestNumber = +arrayOfNumbers[i]
            }
        }
        return highestNumber + ' ' + LowestNumber

  }

console.log(highAndLow("-1 -1"))
