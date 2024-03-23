// metode ini digunakan untuk mengulang melalui setiap elemen dalam array dan menjalankan sebuah fungsi callback untuk setiap elemen. 
// Perulangan forEach membuat kode Anda lebih mudah dibaca dan memungkinkan Anda untuk memanipulasi atau melakukan operasi pada setiap elemen array.

/* <===============================================================================> */
/* <===============================================================================> */


// contoh penggunaan forEach pada array
let colors = ["red", "yellow", "green", "purple", "blue"];
colors.forEach(function(color) {
    console.log(color);
});


// perulangan forEach dengan index
colors.forEach(function(color, index) {
    console.log(`${index} : ${color}`);
});


// perulangan forEach dengan index dan full data array
colors.forEach(function (color, index, array){
    console.log(`${index} : ${color}`);
    console.log(array);
});




// forEach juga bisa untuk melooping object
// namun pada materi kali ini saya tidak akan mengimplementasikannya untuk object
// akan saya bahasa pada folder tersendiri


/* <===============================================================================> */
