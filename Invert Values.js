function invert(array) {
    let newarr = []
    for(let i = 0; i<array.length; i++){
        if(array[i] != 0){
            newarr.push(-array[i])
        } else{
            newarr.push(array[i])
        }
    }
    return newarr
 }

 console.log([1,-2,3,-4,5])