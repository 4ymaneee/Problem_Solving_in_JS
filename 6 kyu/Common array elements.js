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