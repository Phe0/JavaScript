let convertFahrenheitToCelcius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let value1 = convertFahrenheitToCelcius(32)
let value2 = convertFahrenheitToCelcius(68)
console.log(value1, value2) 