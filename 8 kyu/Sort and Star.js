// You will be given a list of strings. You must sort it alphabetically
// (case-sensitive, and based on the ASCII values of the chars) and
// then return the first value.
// The returned value must be a string, and have
// "***" between each of its letters.
// You should not remove or add elements from/to the array.

// first sort the array alphabetique
// then return the first value as a string
// and loop the string and every letter should be between ***
// then return the result

function twoSort(s) {
  let firstWord = s.sort()[0];
  let result = "";
  for (let i = 0; i < firstWord.length - 1; i++) {
    result += firstWord[i] + "***";
  }
  return result + firstWord[firstWord.length - 1];
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
