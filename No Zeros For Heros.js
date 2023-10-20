function noBoringZeros(n) {
    let string = n.toString();

    while(string.lastIndexOf(0) === string.length - 1){
        string = string.slice(0, string.length - 1)
    }
    return +string
  }

console.log(noBoringZeros(105000))
