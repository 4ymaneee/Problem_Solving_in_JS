function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let newArr = []
    for(let i = 0; i < birds.length; i++){
        if(!geese.includes(birds[i])){
            newArr.push(birds[i])
        }
    }
    return newArr
  };

console.log(gooseFilter( ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

