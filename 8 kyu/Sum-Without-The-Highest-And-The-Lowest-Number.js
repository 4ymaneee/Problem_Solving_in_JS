// check if empty value return 0
//find the highest number
//find the lowest number
//remove the highest number and lower number
//sum all numbers in the array

function SumWithoutTheHighestAndTheLowestNumber(array){
    if(array == null) return 0
    let newarr = array.sort((a,b) => a - b).slice(1,-1)
    let sum = 0
    for(let i=0;i<newarr.length;i++){
        sum += newarr[i]
    }
    return sum
}

console.log(SumWithoutTheHighestAndTheLowestNumber([1,1,2,4000,900]))