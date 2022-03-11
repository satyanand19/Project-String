let Object = require('./string4');

let objectName1 = { first_name: "Satyanand", last_name: "Yadav" };

let objectName2 = { first_name: "Shivanand", middle_name: "Kumar", last_name: "Yadav" };

let objectName3 = {};

let objectName4 = {age : 23, gender : "male"};

let objectName5 = { first_name: "Aman", middle_name : 34, last_name: "Singh" };

Object.printName(Object.fullName(objectName1));
Object.printName(Object.fullName(objectName2));
Object.printName(Object.fullName(objectName3));
Object.printName(Object.fullName(objectName4));
Object.printName(Object.fullName(objectName5));