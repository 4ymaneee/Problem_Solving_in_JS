// Given three arrays of integers, return the sum 
// of elements that are common in all three arrays.


function common(a,b,c){
    let commonNumber = 0
    for(let i in a){
        if(b.indexOf(a[i]) != -1 && c.indexOf(a[i])!= -1){
            commonNumber += a[i]
            b.splice(b.indexOf(a[i]),1);
            c.splice(c.indexOf(a[i]),1);
        }
    }
    return commonNumber
   }

console.log(common([1,2,2,2,3],[5,3,2,2,2],[7,3,2,2,2]))
