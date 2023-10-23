// In a small town the population is p0 = 1000 at the beginning
// of a year. The population regularly increases by 2 percent 
// per year and moreover 50 new inhabitants per year come to 
// live in the town. How many years does the town need to see
// its population greater or equal to p = 1200 inhabitants?


function nbYear(p0, percent, aug, p) {
    let populationNumber = 0
    let years = 0
    for(let i = 1; i <= p; i++){
        populationNumber = p0 + p0 * (percent / 100) + aug
        if(populationNumber >= p){
            years = i
            break
        }
        p0 = Math.floor(populationNumber)
    }
    return years
}

console.log(nbYear(1500000, 0.25, 1000, 2000000))