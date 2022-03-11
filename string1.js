function convertStringToNumber(stringValue) {

    if (stringValue !== undefined && stringValue.charAt(0) === '-' && stringValue.charAt(1) === '$' && isNaN(stringValue.slice(2, stringValue.length).replace(",", "")) === false) {

        return parseFloat(stringValue.charAt(0) + (stringValue.slice(2, stringValue.length).replace(",", "")));
    }
    else if (stringValue !== undefined && stringValue.charAt(0) === '$' && isNaN(stringValue.slice(1, stringValue.length).replace(",", "")) === false) {

        return parseFloat((stringValue.slice(1, stringValue.length).replace(",", "")));
    }
    else {

        return 0;
    }
}
let printNumber = getNumber => {
    if (getNumber === 0) {
        console.log("invalid input");
    }
    else {
        console.log(getNumber)
    }
};


module.exports = {
    convertStringToNumber,
    printNumber
};
