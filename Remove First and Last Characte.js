function removeChar(str) {
  array = str.split("");
  array.splice(0, 1);
  array.splice(array.length - 1, 1);
  return array.join('')
}

console.log(removeChar('aymane'))