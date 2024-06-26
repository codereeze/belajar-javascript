// hoisting adalah konsep pemrograman di JavaScript dimana deklarasi variable dipindahkan ke bagian atas, dari tempat variable itu di deklarasikan sebelum kode aktual dieksekusi.

/* <===============================================================================> */
/* <===============================================================================> */


// contoh sederhananya sebagai berikut


// hoisting pada variable
console.log(fullName); // undefined
var fullName = "John Doe";
console.log(fullName);



// hoisting di dalam function
function sayHello(){
    console.log(hello); // undefined
    var hello = "Hello World!";
    console.log(hello); // Hello World!
}

sayHello();

/* <===============================================================================> */
