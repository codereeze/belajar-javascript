// method trim digunakan untuk menghapus whitespace atau spasi pada awal dan akhir string

/* <===============================================================================> */
/* <===============================================================================> */

let text = "    Mas Faiz membeli burung di mafia burung     ";
console.log(text.trim()); // Mas Faiz membeli burung di mafia burung



// kita juga bisa mengatur whitespace bagaian mana yang ingin dihapus. apakah bagian awal atau akhir


// menghapus whitespace pada bagian awal
let firstName = "    Hardin";
console.log(firstName.trimStart()); // Hardin


// menghapus whitespace pada bagian akhir;
let lastName = "Sutono      ";
console.log(lastName.trimEnd()); // Sutono


/* <===============================================================================> */