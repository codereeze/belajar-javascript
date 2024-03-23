// prevent default digunakan untuk mencegah aksi bawaan dari element HTML
// contoh ketika kita mengklik tombol submit maka akan mengirim data formulir
// kita bisa menghentikan aksi bawaan tersebut dengan prevent default

/* <===============================================================================> */
/* <===============================================================================> */

let btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("submit", function (event){
    event.preventDefault();
})

/* <===============================================================================> */
