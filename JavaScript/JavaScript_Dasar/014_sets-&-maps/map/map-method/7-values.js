// jika method keys digunakan untuk mengembalikan semua key dari Map
// maka method values digunakan untuk mengembalikan semua value dari Map

/* <===============================================================================> */
/* <===============================================================================> */

let listTipeDataJS = new Map([
    ["data1", "Number"],
    ["data2", "String"],
    ["data3", "Boolean"],
    ["data4", "Object"]
]);

console.log(listTipeDataJS.values()); // [Map Iterator] { 'Number', 'String', 'Boolean', 'Object' }

/* <===============================================================================> */

