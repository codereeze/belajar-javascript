// array adalah variable super yang dapat menampung banyak data sekaligus, tanpa ada batasan panjang data yang bisa ditampung
// array digunakan untuk mengurangi penggunaan variable berlebih
// array bebas berisi tipe data apa saja
// kamu bisa membuat array dengan kata kunci const untuk membuat array tidak bisa di ubah nilainya (konstanta)
// untuk mengakses data array kita bisa menggunakan index. 
// contoh cara memanggilnya: namaVariable[index];

/* <===============================================================================> */
/* <===============================================================================> */


// kode tanpa array
let motor1 = "Yamaha";
let motor2 = "Honda";
let motor3 = "Suzuki";

console.log(motor1); 
console.log(motor2); 
console.log(motor3); 


// jika kita lihat kode diatas terlalu banyak menggunakan variable
// coba bandingkan dengan kode array di bawah ini

// kode dengan array
let motors = ["Yamaha", "Honda", "Suzuki"];
console.log(motors[0]); 
console.log(motors[1]); 
console.log(motors[2]); 
// kode diatas terlihat lebih simple kan


// kita bisa mengubah nilai dari array
motors[0] = "Kawasaki";
console.log(motors[0]); 
// mengubah nilai array pada index ke 0


// kita bisa menambahkan data array baru
motors[3] = "Ducati";
console.log(motors[3]); 

console.log(motors);



// kita bisa juga menghapus index dari array
delete motors[3];
console.log(motors); 
// pada contoh diatas kita menghapus index dari array tetapi tidak mengurangi panjang dari array tersebut

console.log(motors[3]); // undefined




// kita juga bisa membuat array didalam array

let randomArray = [[1,2,3], [4,5,6], "Hello World"];
console.log(randomArray);

/* <===============================================================================> */