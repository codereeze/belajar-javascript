// arrow function adalah function versi sederhana dari anonymous function
// kenapa dipanggil arrow function?. karena pada implementasinya kita menggunakan symbol seperti panah ( => )

/* <===============================================================================> */
/* <===============================================================================> */


// contoh penggunaan arrow function

let sayHello = () => {
    console.log("Hallo Dunia");
}

sayHello(); // Hallo Dunia



// arrow function juga dapat menampung argument dan parameter
// contoh penggunaan arrow function dengan argument dan parameter
// arrow function juga bisa tanpa blok atau kurung kurawal (jika hanya ada satu baris kode saja)


let animalSound = (animal, sound) => console.log(`this is ${animal} sound ${sound}`);


animalSound("Tiger", "Rawwrrr"); // this is Tiger sound Rawwrrr



// jika parameter yang dikirimkan hanya satu, kita boleh tidak menggunakan tanda kurung ()
let yourName = name => console.log(`Hello ${name}`);

yourName("Faiz Norman"); // Hello Faiz Norman


// pada part selanjutnya kita akan membahas kekurangan dari arrow function

/* <===============================================================================> */
