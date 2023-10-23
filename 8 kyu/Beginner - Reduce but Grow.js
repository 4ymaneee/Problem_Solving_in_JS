function grow(x){
    let multiply = 1
    for(let i = 0; i < x.length; i++){
        multiply = multiply * x[i] 
    }
    return multiply
}

console.log(grow([1, 2, 3]))