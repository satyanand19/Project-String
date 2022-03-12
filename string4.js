function fullName(objectDetailswithname) {

    let firstName = objectDetailswithname && objectDetailswithname.first_name || '';
    let middleName = objectDetailswithname && objectDetailswithname.middle_name || '';
    let lastName = objectDetailswithname && objectDetailswithname.last_name || '';

    return `${firstName} ${middleName} ${lastName}`;
}

let printName = stringValue => {
    if (stringValue === "") {
        console.log("Invalid input");
    }
    else {
        console.log(stringValue.trim());
    }
}

module.exports = {
    fullName,
    printName
};