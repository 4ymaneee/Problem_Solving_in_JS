function sumMix(x){
    return x.reduce((acc, currentValue) => parseInt(acc) + parseInt(currentValue), 0 )
}

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))