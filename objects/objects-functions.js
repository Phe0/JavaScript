let getTemps = function(fahrenheit){
    let celsius = (fahrenheit - 32) * (5 / 9)
    let kelvin = (fahrenheit + 459.67) * (5 / 9)

    return {
        fahrenheit: fahrenheit,
        celsius: celsius,
        kelvin: kelvin
    }
}

console.log(getTemps(74))