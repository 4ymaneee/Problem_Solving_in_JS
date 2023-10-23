function reverseWords(str) {
     let reversechar = str.split('').reverse().join('')
     return reversechar.split(' ').reverse().join(' ')
  }
console.log(reverseWords("double  spaces"))