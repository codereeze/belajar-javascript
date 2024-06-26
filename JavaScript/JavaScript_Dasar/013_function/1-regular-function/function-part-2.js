// pada part sebelumnya kita sudah membuat sebuah function
// pada part kali ini kita akan membahas argument dan parameter pada function
// memberikan argument dan parameter ini bersifat optional


/* 

* argument adalah nilai yang diberikan saat ketika pemangilan function. nilai ini yang nantinya akan ditangkap / ditampung ke dalam variable-variable yang ada di parameter function.

* parameter adalah variable yang didefinisikan didalam tanda kurung ketika medifinisakan function. parameter inilah yang menerima nilai dari argument

*/


/* <===============================================================================> */
/* <===============================================================================> */

// contoh sederhananya

function multiply(x, y, z){
    console.log(x * y * z); 
}

multiply(10, 20, 30) 


// contoh lainnya
function person(firstName, middleName, lastName){
    console.log(`Nama depan: ${firstName}`);
    console.log(`Nama tengah: ${middleName}`);
    console.log(`Nama akhir: ${lastName}`);
}

person("Guido", "Van", "Rossum")





// kita bisa memberikan nilai default di parameter
// jika ingin memberikan nilai default, harap posisikan parameter default di bagian akhir untuk menghindari undefined


// function default parameter
function sayHello(firstName, lastName = "Budiman"){
    console.log(`Hello, ${firstName} ${lastName}`); 
}

sayHello("Purnomo"); 
sayHello("John", "Doe"); 


/* <===============================================================================> */
