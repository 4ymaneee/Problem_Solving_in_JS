function updateLight(current) {
    let lightsArray = ['green','yellow','red']
    if(lightsArray.indexOf(current) == 2){
        return 'green'
    }else {
        return lightsArray[lightsArray.indexOf(current) + 1]
    }
  }
console.log(updateLight('red'))