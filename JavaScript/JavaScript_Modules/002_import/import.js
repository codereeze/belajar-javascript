// kata kunci import digunakan untuk memanggil data yang dieksport oleh module
// kita bisa mengimport data secara berpart atau secara keseluruhan

/* <===============================================================================> */
/* <===============================================================================> */

// import secara berpart
import { firstName } from "./modules/module.mjs";
console.log(firstName);

console.log();

// import keseluruhan dan aliaskan
import * as personName from "./modules/module.mjs";
console.log(personName.firstName);
console.log(personName.middleName);
console.log(personName.lastName);
