function feast(beast, dish) {
    let beastArray = beast.split('')
    let dishArray = dish.split('')
    if(beastArray[0] == dishArray[0] ){
        if(beastArray[beastArray.length - 1] == dishArray[dishArray.length - 1]){
            return true
        }else {
            return false
        }
    }else {
        return false
    }
}

console.log(feast("great blue heron", "garlic naas"))