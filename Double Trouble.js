// Given an array of integers (x), and a target (t),
// you must find out if any two consecutive numbers
// in the array sum to t. If so, remove the second number.


//loop through x
//check if x[i] + x[i+1] = t
//if true remove the element from array and decresse i to check one more time
//return x

function trouble(x, t) {
    for (let i = 0; i < x.length ; i++) {
        if (x[i] + x[i + 1] === t) {
            x.splice(i + 1, 1);
            i--
        }
    }
    return x;
}
console.log(trouble([4, 1, 1, 1, 4],2))