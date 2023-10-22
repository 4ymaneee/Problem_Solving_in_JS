function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((acc, currentValue) => acc+currentValue,0) / classPoints.length
  }

  
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))