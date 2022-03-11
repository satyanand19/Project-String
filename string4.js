function fullName(objectDetailswithname) {
    if (Object.keys(objectDetailswithname).length === 2 && objectDetailswithname.hasOwnProperty('first_name') && objectDetailswithname.hasOwnProperty('last_name')) {

        if (typeof objectDetailswithname.first_name === 'string' && typeof objectDetailswithname.last_name === 'string') {
            return objectDetailswithname.first_name + " " + objectDetailswithname.last_name;
        }
        else {
            return "";
        }
    }
    else if (Object.keys(objectDetailswithname).length === 3 && objectDetailswithname.hasOwnProperty('first_name') && objectDetailswithname.hasOwnProperty('middle_name')
        && objectDetailswithname.hasOwnProperty('last_name')) {

        if (typeof objectDetailswithname.first_name === 'string' && typeof objectDetailswithname.middle_name === 'string'
            && typeof objectDetailswithname.last_name === 'string') {
            return objectDetailswithname.first_name + " " + objectDetailswithname.middle_name + " " + objectDetailswithname.last_name;
        }
        else {
            return "";
        }
    }
    else {
        return "";
    }
}

let printName = stringValue => {
    if (stringValue === "") {
        console.log("Invalid input");
    }
    else {
        console.log(stringValue);
    }
}

module.exports = {
    fullName,
    printName
};