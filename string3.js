function getMonth(stringvalue) {
    let splitDate = stringvalue.split("/");

    if (splitDate.length === 3) {
        for (let counter = 0; counter < splitDate.length; counter++) {
            splitDate[counter] = parseInt(splitDate[counter]);
        }
        if (splitDate[0] >= 1 && splitDate[0] <= 12) {
            return monthName(splitDate[0]);
        }
        else {
            return "";
        }
    }
    else {
        return "";
    }
}
function monthName(monthNumber) {
    switch (monthNumber) {
        case 1: console.log("January");
            break;
        case 2: console.log("February");
            break;
        case 3: console.log("March");
            break;
        case 4: console.log("April");
            break;
        case 5: console.log("May");
            break;
        case 6: console.log("June");
            break;
        case 7: console.log("July");
            break;
        case 8: console.log("August");
            break;
        case 9: console.log("September");
            break;
        case 10: console.log("October");
            break;
        case 11: console.log("November");
            break;
        case 12: console.log("December");
            break;
        default: console.log("Wrong input");
            break;
    }
}

module.exports = {
    getMonth
};