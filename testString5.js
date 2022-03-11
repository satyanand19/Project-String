const { printName } = require('./string4');
let Object = require('./string5');

let stringarray1=["I","love","to","code"];
let stringarray2=["the", "quick", "brown", "fox"];
let stringarray3=[];
let stringarray4=["My","name",1233];
let stringarray5=[435, true, "Satyanand"];

Object.printString(Object.convertStringArrayToSentence(stringarray1));
Object.printString(Object.convertStringArrayToSentence(stringarray2));
Object.printString(Object.convertStringArrayToSentence(stringarray3));
Object.printString(Object.convertStringArrayToSentence(stringarray4));
Object.printString(Object.convertStringArrayToSentence(stringarray5));
Object.printString(Object.convertStringArrayToSentence(""));
Object.printString(Object.convertStringArrayToSentence("sat"));