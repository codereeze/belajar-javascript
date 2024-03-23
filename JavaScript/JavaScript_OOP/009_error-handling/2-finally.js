// kata kunci finally adalah bagian dari try-catch-finally yang digunakan untuk menangani masalah/error
// kata kunci finally itu opsional untuk digunakan 
// finally dieksekusi setelah block try 
// finally akan tetap dieksekusi meskipun tidak ada kesalahan 

/* <===============================================================================> */
/* <===============================================================================> */

class Person{
    static sayHello(firstName, lastName){
        if(firstName == undefined && lastName == undefined){
            throw new Error("Mohon Maaf, Anda belum memasukan salah satu nama");
        }

        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}


try{
    // masukkan kode yang menyebabkan error
    console.log(Person.sayHello());


    // kode program dibawah tidak akan dieksekusi
    console.log("Kode program tidak akan dieksekusi");
}catch(error){
    console.log(`Terjadi error : ${error.message}`);
}finally{
    // block ini akan selalu di eksekusi meskipun tidak ada kesalahan
    console.log("Kode finally berhasil dieksekusi");
}

console.log("Kode program dilanjutkan");



console.log();




// kita bisa mengkombinasikan block finally dengan block try saja tanpa block catch
// contoh penggunaannya

try{
    console.log(Person.sayHello());
}finally{
    console.log("ini adalah block finally ke-2");
}

/* <===============================================================================> */
