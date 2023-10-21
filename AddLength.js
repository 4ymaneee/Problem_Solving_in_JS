// convert str to array 
// loop the array
//and add after a word his length

function addLength(str) {
    let array = str.split(' ')
    let newArray = []
    let stringLength = ''
    for(let i = 0; i < array.length; i++){
        stringLength = array[i].length
        newArray.push(array[i] +" "+ stringLength)
    }
    return newArray
}

console.log(addLength('aymane kjhouya dsdsa'))
    
