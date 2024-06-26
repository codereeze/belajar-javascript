// function adalah blok kode program yang akan dijalankan ketika nama function tersebut dipanggil
// function memiliki ruang lingkupnya (scope) sendiri yaitu local scope
// kode yang berada diluar function disebut global scope

/* <===============================================================================> */
/* <===============================================================================> */

function sayHello(){
    let name = "Jane";
    console.log("Hello, how are you?");
    console.log(`my name is ${name}`);
}

// panggil nama function untuk menjalankan function

sayHello();


// secara default function itu tidak mengembalikan sebuah nilai / value
// kita bisa membuat function yang bisa mengembalikan nilai
// yaitu menggunakan kata kunci return
// perlu diingat kata kunci return bisa menghentikan eksekusi function



// function return value
function sum(){
    let total = 10;
    for (let i = 1; i <= 20; i++){
        total += i;
    }

    return total; // 220
}

console.log(`Hasilnya adalah ${sum()}`); 



// menghentikan eksekusi function dengan kata kunci return
function person(){
    // kode ini akan dieksekusi
    console.log("Nama: Gojo Satoru");
    console.log("Kelas: XII DKV 1");
    console.log("Sekolah: SMK Jujutsu Tokyo");

    return

    // kode dibawah tidak akan di eksekusi
    console.log("Color: Orange");
    console.log("Hobby: Programming");
    console.log("Pacar: Tidak punya😁");
}

// panggil function
person();

// selanjutnya kita akan membuat function yang dapat menerima argument dan parameter
// saya buat materinya ber-part agar tidak terlalu menumpuk di satu file
// harap ikuti secara urut part-part nya

/* <===============================================================================> */
