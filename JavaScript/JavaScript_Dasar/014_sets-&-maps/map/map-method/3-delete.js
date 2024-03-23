// method delete digunakan untuk menghapus data di dalam map

/* <===============================================================================> */
/* <===============================================================================> */

let listTipeDataJS = new Map([
    ["data1", "Number"],
    ["data2", "String"],
    ["data3", "Boolean"],
    ["data4", "Object"]
]);

listTipeDataJS.delete("data1");

console.log(listTipeDataJS.get("data1")); // undefined

// hasilnya undefined karena data1 sudah dihapus

/* <===============================================================================> */