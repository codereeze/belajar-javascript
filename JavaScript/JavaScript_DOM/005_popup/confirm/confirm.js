// confirm adalah popup dalam bentuk konfirmasi

/* <===============================================================================> */
/* <===============================================================================> */

let button = document.getElementById("submit");

button.addEventListener("click", function(){
    let notif = confirm("Apakah kamu sudah yakin sudah mengisi dengan benar?");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(notif){
        if(password == "" || username == ""){
            confirm("Harap lengkapi data terlebih dahulu!");
        }else{
            let username = document.getElementById("username").value;
            confirm(`Hello ${username}, terimakasih sudah menggunakan aplikasi kami`);
        }
    }else{
        confirm("Silahkan periksa kembali data Anda");
    }
});

/* <===============================================================================> */
