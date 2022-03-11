function splitIPv4address(stringvalue) {
    let emptyarray = [];
    let splitComponentparts = stringvalue.split(".");

    

    if (splitComponentparts.length === 4) {

        let checkeachcomponent = null;

        for (let counter = 0; counter < splitComponentparts.length; counter++) {
            splitComponentparts[counter] = parseInt(splitComponentparts[counter]);
        }

        for (let counter = 0; counter < splitComponentparts.length; counter++) {

            if (splitComponentparts[counter] >= 0 && splitComponentparts[counter] <= 255) {

                checkeachcomponent = true;
            }
            else {

                checkeachcomponent = false;
                break;
            }

        }
        if (checkeachcomponent) {

            return splitComponentparts;
        }
        else {

            return emptyarray;
        }
    }
    else {
        return emptyarray;
    }
}

let printComponentparts = (parts) => {

    console.log("Result : ");


    for (let counter = 0; counter < parts.length; counter++) {

        console.log(parts[counter]);
    }
}

module.exports = {
    splitIPv4address,
    printComponentparts
};