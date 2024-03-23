// aggregate digunakan untuk mengumpulkan beberapa module menjadi satu
// penggunaan aggregate digunakan untuk menyederhanakan agar kita hanya cukup mengimport satu file saja yang berisi seluruh module

/* <===============================================================================> */
/* <===============================================================================> */

export { add, multiply } from './modules/calculator.mjs'
export { fruits } from './modules/fruits.mjs'
export { firstName, middleName, lastName } from './modules/name.mjs'