// method substring sama seperti slice
// perbedaanya adalah substring tidak mendukung bilangan negatif 

/* <===============================================================================> */
/* <===============================================================================> */


let teks = "Mas Faiz nonton konser setiap hari";
console.log(teks.substring(9)); 

console.log(teks.substring(0, 8)); 


// bilangan negatif
// output string kosong
console.log(teks.substring(-10, -5));


/* <===============================================================================> */

