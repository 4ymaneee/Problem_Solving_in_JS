function countSheeps(sheep) {
    if(sheep == null || sheep == undefined) return 0
  let presenceOfSheep = 0
  for(let i = 0 ;i < sheep.length; i++){
      if(sheep[i] == true){
          presenceOfSheep += 1
      }
  }
  return presenceOfSheep
}

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))