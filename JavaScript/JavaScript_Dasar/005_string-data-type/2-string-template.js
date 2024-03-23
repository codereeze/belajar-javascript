// string template adalah metode baru untuk membuat tipe data string
// string template muncul pada ES6
// untuk membuat string template kita menggunakan backtick ( `` ) 

/* <===============================================================================> */
/* <===============================================================================> */


// contoh membuat tipe data string dengan backtick
let thisBacktick = `Ini adalah backtick`;
console.log(thisBacktick); // Ini adalah backtick


/* <===============================================================================> */

// sama seperti single quote dan double quote, jika menggunakan jenis quote yang diapit sama maka akan menghasilkan ambiguitas
// kita memerlukan escape character ( \ ) jika ingin menggunakan jenis quote yang diapit sama


// error string tidak valid atau ambigu
console.log(`Rudy sedang `berenang` di sungai`);
// string valid
console.log(`Rudy sedang \`berenang\` di sungai`);

/* <===============================================================================> */


// keunggulan menggunakan backtic

// 1. menggabungkan string tanpa menggunakan operator plus ( + )
//    menggunakan `${namaVariable}` jauh lebih efisien dari pada operator plus

let firstName = "Atyla Azfa";
let lastName = "Al Harits";

console.log(`Nama depan: ${firstName}, Nama belakang ${lastName}`); 
// Nama depan: Atyla Azfa, Nama belakang: Al Harits


// 2. membuat string multiline

let multilineString = `
Hallo teman-teman semua
saat ini kita sedang belajar string template
selamat belajar :)
`;

console.log(multilineString);

/* <===============================================================================> */

