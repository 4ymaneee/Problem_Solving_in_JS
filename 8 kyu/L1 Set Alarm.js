function setAlarm(employed, vacation){
    return employed != vacation ? !vacation:false
}

console.log(setAlarm(true, false))