// vowel letters
//loop vowell letteres
//check the string if he containe a vowel lettres
//remove vowel letters

function shortcut (string) {
    let array = string.split('')
    let vowelLetters = ['a','e','i','o','u']
    for(let i = array.length - 1; i >= 0 ; i--){
        for(let x = vowelLetters.length - 1; x >= 0 ; x--){
            if(array[i] == vowelLetters[x]){
                array.splice(i,1)
            }
        }
    }
    return array.join('')
  }

console.log(  shortcut ('goodbye'))