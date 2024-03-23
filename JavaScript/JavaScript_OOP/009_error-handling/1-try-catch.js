// saat kode kita mengalami error kadang kita ingin kode program kita berhenti
// kita bisa mengatasi ini dengan error handling yaitu try catch statement

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
}

console.log("Kode program dilanjutkan");

/* <===============================================================================> */
