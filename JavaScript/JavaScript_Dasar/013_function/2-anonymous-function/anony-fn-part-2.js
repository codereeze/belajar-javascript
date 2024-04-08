// pada part kali ini kita akan mencoba menggunakan anonymous function di dalam object
// caranya hampir mirip seperti mendeklarasikannya di dalam variable

/* <===============================================================================> */
/* <===============================================================================> */

let person = {
    firstName: "Jane",
    lastName: "Doe",
    sayHello : function (){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

// jalankan anonymous
person.sayHello(); 



// selain membuat anonymous di dalam object, kita juga bisa mengimplementasikannya ke dalam array
let animals = ["kucing", "harimau", function (animal, sound) { console.log(`this is ${animal} sound '${sound}'`);}];

// jalankan anonymous
animals[2]("cat", "miawww"); 


// mungkin bagi yang masih baru belajar akan terlihat membingungkan 
// nanti juga akan terbiasa kok

/* <===============================================================================> */
