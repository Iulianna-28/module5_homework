// console.log(Math.random()*100))

function getRandomNumber (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(min-max)+min)
}
console.log(getRandomNumber(99,0))