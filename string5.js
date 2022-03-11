function convertStringArrayToSentence(stringArray) {
    if (stringArray.length === 0) {
        return "";
    }
    else {
        let chechtypeString = null;
        let storeSentence="";
        for (let counter = 0; counter < stringArray.length; counter++) {
            if (typeof stringArray[counter] === "string") {
                chechtypeString = true;
                storeSentence += stringArray[counter]+" ";
            }
            else {
                chechtypeString = false;
                break;
            }
        }
        if (chechtypeString) {
            return storeSentence;
        }
        else {
            return "";
        }
    }
}

let printString = Sentence => {
    if (Sentence === "") {
        console.log("invalid input");
    }
    else {
        console.log(Sentence);
    }
};

module.exports = {
    convertStringArrayToSentence,
    printString
};