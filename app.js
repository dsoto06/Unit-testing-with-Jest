// // this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // returnamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
    // returnamos el valor
    return valueInYen;
}

const fromYanToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;;
    // returnamos el valor
    return valueInPound;
}
console.log(fromEuroToDollar(3.5))
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
// module.exports = { sum, fromEuroToDollar }
// module.exports = { sum, fromDollarToYen }
// module.exports = { sum, fromYanToPound }
