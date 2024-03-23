// generator function adalah fungsi yang digunakan menghasilkan nilai secara bertahap tanpa harus melakukan eksekusi keseluruhan

/* <===============================================================================> */
/* <===============================================================================> */

// contoh penggunaan generator function pada bilangan fibonacci
function* generateFibonacci(){
    let a = 0, b = 1;
    while(true){
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibonacci = generateFibonacci();

// ambil 20 angka pertama dalam deret fibonacci
for(let i = 1; i <= 20; i++){
    console.log(fibonacci.next().value);
}

/* <===============================================================================> */
