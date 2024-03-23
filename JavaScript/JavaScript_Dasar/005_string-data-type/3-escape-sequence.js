// escape sequence adalah karakter khusus yang digunakan untuk melakukan operasi khusus pada string seperti TAB, dan ENTER
// pada sebelumnya kita suda menggunakan escape character pada string untuk menghindari ambiguitas
// ada banyak sekali karakter escape di JavaScript namun yang akan kita gunakan saat ini adalah untuk enter dan tab

//  \t => digunakan untuk TAB
//  \n => digunakan untuk ENTER

/* <===============================================================================> */
/* <===============================================================================> */

// contoh penggunaan


// TAB
let title = "\tSi kancil anak yang nakal";
document.writeln(title); //      Si kancil anak yang nakal


// ENTER
document.writeln("Ini adalah escape \nkarakter untuk ENTER");

/* <===============================================================================> */

