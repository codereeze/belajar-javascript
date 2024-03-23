// pada part kali ini kita akan mencoba menggunakan anonymous function di dalam object
// caranya hampir mirip seperti mendeklarasikannya di dalam variable

/* <===============================================================================> */
/* <===============================================================================> */

let person = {
    firstName: "Azfa",
    lastName: "Harits",
    sayHello : function (){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

// jalankan anonymous
person.sayHello(); // Hello, my name is Azfa Harits



// selain membuat anonymous di dalam object, kita juga bisa mengimplementasikannya ke dalam array
let animals = ["kucing", "harimau", function (animal, sound) { console.log(`this is ${animal} sound '${sound}'`);}];

// jalankan anonymous
animals[2]("cat", "miawww"); // this is cat sound 'miawww'


// mungkin bagi yang masih baru belajar akan terlihat membingungkan 
// nanti juga akan terbiasa kok

/* <===============================================================================> */
