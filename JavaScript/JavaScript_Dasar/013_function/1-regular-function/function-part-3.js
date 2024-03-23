// pada part kali ini saya akan membahas tentang rest parameter di function
// rest parameter adalah metode mengirimkan data sebanyak-banyak nya dalam satu parameter, yang nantinya data tersebut dikonversi menjadi sebuah array
// hal-hal yang perlu diperhatikan ketika ingin membuat rest parameter

/* 
1. rest parameter harus berada di posisi paling belakang
2. tidak boleh ada dua rest parameter dalam satu function
*/

/* <===============================================================================> */
/* <===============================================================================> */


// contoh penggunaan rest parameter

function sum(name, fruit, ...restParameter){
    let total = 0;
    for(let counter of restParameter){
        total += counter;
    }

    return `${name} punya ${total} buah ${fruit}`;
}


console.log(sum("Atyla", "Apple", 3, 4, 5, 6, 7,)); // Atyla punya 25 buah Apple



// kadang-kadang saat kita ngonding kita menggunakan data berupa array
// kita bisa menggunakan data array yang kita buat kedalam rest parameter
// caranya kita bisa gunakan titik tiga kali ( ... ) kemudian diikuti data array nya
// fitur ini dinamakan spread syntax


// penggunaan spread syntax
function sumFruit(fruit, ...dataFruit){
    let total = 0;
    for(let count of dataFruit){
        total += count;
    }

    return `Aku punya ${total} buah ${fruit}`;
}

let mangga = [10, 20, 30, 40];
console.log(sumFruit("Mangga", ...mangga)); // Aku punya 100 buah Mangga

console.log(sumFruit("Pisang", ...[50, 60, 70, 80])); // Aku punya 260 buah Pisang




// argument object
// sebelum adanya fitur rest parameter, JavaScript sudah memiliki fitur bernama argument object
// untuk saat ini lebih disarankan penggunaan rest parameter dibandingkan argument object


function sumBall(){
    let total = 0;
    for(let count of arguments){
        total += count;
    }

    return `Mas Faiz mempunyai ${total} bola voly`;
}

console.log(sumBall(12, 13, 14, 15, 16)); // Mas Faiz mempunyai 70 bola voly


/* <===============================================================================> */
