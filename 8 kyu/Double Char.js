function doubleChar(str) {
    let repeat = ''
    for(let i =0;i<str.length;i++){
        repeat += str[i] + str[i]
    }
    return repeat
  }
  
console.log(doubleChar('1234!_ '))