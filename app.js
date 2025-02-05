// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3));

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


const fromDollarToYen = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 0.81;
    // return the dollar value
    return valueInDollar;
}

const fromYenToPound = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 179.88;
    // return the dollar value
    return valueInDollar;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }