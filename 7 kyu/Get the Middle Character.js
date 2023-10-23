// You are going to be given a word. Your job is
// to return the middle character of the word.
// If the word's length is odd, return the middle
// character. If the word's length is even, return
// the middle 2 characters.

function getMiddle(s) {
  let sToArray = s.split('')
    if (sToArray.length % 2 == 0) {
        return sToArray.splice((sToArray.length / 2) - 1, 2).join("")
      } else {
        return sToArray.splice((sToArray.length - 1) / 2, 1).join("")
      }
}

console.log(getMiddle("A"));
