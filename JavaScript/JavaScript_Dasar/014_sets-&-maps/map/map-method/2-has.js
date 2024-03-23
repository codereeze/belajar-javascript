// method has digunakan untuk mengecek apakah key yang dicek, ada atau tidak
// method ini mengembalikan nilai boolean 

/* <===============================================================================> */
/* <===============================================================================> */

let listTipeDataJS = new Map([
    ["data1", "Number"],
    ["data2", "String"],
    ["data3", "Boolean"],
    ["data4", "Object"]
]);


console.log(listTipeDataJS.has("data4")); // true
console.log(listTipeDataJS.has("data5")); // false


/* <===============================================================================> */
