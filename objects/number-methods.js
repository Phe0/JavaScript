let makeGuess = function(num) {
    let min = 1
    let max = 5

    if(num < 1 || num > 5){
        console.log('Invalid Number')
    }
    else {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

        return randomNum === num
    }
}

console.log(makeGuess(3))