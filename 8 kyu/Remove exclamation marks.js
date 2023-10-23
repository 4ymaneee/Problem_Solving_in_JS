function removeExclamationMarks(s) {
    let array = s.split('')
    for(let i = array.length-1; i >=0 ; i--){
        if(array[i] == '!'){
            array.splice(i,1)
        }
    }
    return array.join('')
  }

console.log(removeExclamationMarks('Hello World!!!!'))