function getAverage(marks){
    let average = 0
    for(let mark in marks){
        average += marks[mark] / marks.length
    }
    return Math.floor(average) 
  }

console.log(  getAverage([4,5,8,5,13,10,10,3,11,5,3]))