// strict mode atau mode ketat adalah fitur di JavaScript yang memungkinkan untuk menulis kode lebih aman.
// fitur ini dirancang untuk membantu mengidentifikasi dan memperbaiki kesalahan umum, serta mencegah perilaku amnigu

/* <===============================================================================> */
/* <===============================================================================> */

// contoh manfaat dan penggunaan strict mode



// mendeklarasikan variable tanpa kata kunci (var, let, const) akan menghasilkan error
'use strict';
a = "Ayo belajar JavaScript";
console.log(a); // a is not defined





// with statement tidak didukung strict mode
// karena with statement bisa membuat kode menjadi ambigu 

'use strict';
let person = {
    nama: "Haritzzy",
    hobby: "Programming, Game"
}

with(person){
    console.log(nama); // Strict mode code may not include a with statement
    console.log(hobby); // Strict mode code may not include a with statement
}


/* <===============================================================================> */

