function makesTheSentence(characterArray, sentenceString) {
    let stringInArray = sentenceString.replace(/ /g,'').split('').sort().join('')
    let characterInArray = characterArray.sort().join('')
    if(stringInArray == characterInArray){
        return true
    }else {
        return false
    }
}

console.log(makesTheSentence(['S', 'h', 'e', 'a', 'd', 's', '.'], "She adds."))