let Object = require('./string1.js');
Object.printNumber(Object.convertStringToNumber("$100.45"));
Object.printNumber(Object.convertStringToNumber("$1,002.22"));
Object.printNumber(Object.convertStringToNumber("-$123"));
Object.printNumber(Object.convertStringToNumber(""));
Object.printNumber(Object.convertStringToNumber("$   122.89"));
Object.printNumber(Object.convertStringToNumber("$76w.1"));
Object.printNumber(Object.convertStringToNumber("satya"));
Object.printNumber(Object.convertStringToNumber("-$123,232.23"));

Object.printNumber(Object.convertStringToNumber("+$9,992.873"));