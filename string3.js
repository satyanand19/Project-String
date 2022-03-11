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
            return null;
        }
    }
    else {
        return null;
    }
}
function monthName(monthNumber) {
    switch (monthNumber) {
        case 1: return "January";
            break;
        case 2: return "February";
            break;
        case 3: return "March";
            break;
        case 4: return "April";
            break;
        case 5: return "May";
            break;
        case 6: return "June";
            break;
        case 7: return "July";
            break;
        case 8: return "August";
            break;
        case 9: return "September";
            break;
        case 10: return "October";
            break;
        case 11: return "November";
            break;
        case 12: return "December";
            break;
        default: return "";
            break;
    }
}
let printMonth = (monthname) => {
    if (monthname === null) {
        console.log("Wrong input");
    }
    else {
        console.log(monthname);
    }
}

module.exports = {
    getMonth,
    printMonth
};