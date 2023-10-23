// Given three arrays of integers, return the sum 
// of elements that are common in all three arrays.


//create a function
//create a varibale that sum the commonNumber
//loop thorugh a
//check if b includes a[i] && c includes a[i]
//if true sum the commonNumbers
//return the final result

function common(a,b,c){
    let commonNumber = 0
    for(let num of a){
        if(b.includes(num) && c.includes(num)){
            commonNumber += num
        }
    }
    return commonNumber
   }

console.log(common([1,2,2,2,3],[5,3,2,2,2],[7,3,2,2,2]))
