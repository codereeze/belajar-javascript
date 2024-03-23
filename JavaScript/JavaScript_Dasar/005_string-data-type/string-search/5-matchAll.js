// method matchAll sama seperti method match yaitu digunakan untuk mencocokan teks dalam sebuah string dengan menggunakan regular expression
// perbedaannya adalah method matchAll digunakan untuk mengambil semua teks yang cocok
// mengembalikan iterator yang berisi semua hasil pencocokan yang ditemukan dalam string.

/* <===============================================================================> */
/* <===============================================================================> */

let text = "ini adalah teks contoh dari teks teks string";
let result = text.matchAll(/teks/g);
console.log(result);

for (const match of result) {
    console.log(`${match[0]}: ${match.index}`);
}


/* <===============================================================================> */