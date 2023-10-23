function noSpace(x){
    x.split('')
    let newarr = []
    for(let i = 0 ;i < x.length; i++){
        if(x[i] != ' '){
            newarr.push(x[i])
        }
    }
    return newarr.join('')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))