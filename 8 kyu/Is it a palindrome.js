function isPalindrome(x) {
  array = x.toLowerCase().split("").reverse().join("");
  if (array == x.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("Abba"));
