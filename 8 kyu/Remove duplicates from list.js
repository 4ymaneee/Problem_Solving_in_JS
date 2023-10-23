// Define a function that removes duplicates from an array
// of non negative numbers and returns it as a result.

function distinct(a) {
  let finalArr = [];
  for (let i = 0; i < a.length; i++) {
    if (finalArr.indexOf(a[i]) == -1) {
        finalArr.push(a[i])
    }
  }
  return finalArr;
}

console.log(distinct([1, 2, 1, 1, 3, 2]));
