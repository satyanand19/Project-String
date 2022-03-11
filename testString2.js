let Object = require('./string2');

Object.printComponentparts(Object.splitIPv4address("100.100.100.100"));
Object.printComponentparts(Object.splitIPv4address("192.0.1.2"));
Object.printComponentparts(Object.splitIPv4address("100.100.100.100.982"));
Object.printComponentparts(Object.splitIPv4address("255.255.255.255"));
Object.printComponentparts(Object.splitIPv4address(""));
Object.printComponentparts(Object.splitIPv4address("satya"));
Object.printComponentparts(Object.splitIPv4address("110.12340"));
Object.printComponentparts(Object.splitIPv4address("111.139.161.143"));