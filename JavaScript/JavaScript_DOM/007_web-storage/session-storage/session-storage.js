// sessionStorage digunakan untuk menyimpan data didalam storage web browser sementara
// data ini akan hilang kalian menutup tab atau browser
// sessionStorage biasanya digunakan untuk menyimpan data login

/* <===============================================================================> */
/* <===============================================================================> */


let buttonSubmit = document.getElementById("submit");


buttonSubmit.addEventListener("click", () => {
    let inputUsername = document.getElementById("username").value;
    let inputFullname = document.getElementById("fullname").value;

    // buat localStorage
    sessionStorage.setItem("username", inputUsername);
    sessionStorage.setItem("fullname", inputFullname);

    let showGreet = document.getElementById("show-greet");
    showGreet.textContent = `Selamat datang, ${sessionStorage.getItem("username")} atas nama ${sessionStorage.getItem("fullname")}`;
});


let clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", () => {
    sessionStorage.clear();
    document.getElementById("username").value = "";
    document.getElementById("fullname").value = "";
})

// hapus salah satu item
let delUsername = document.getElementById("del-username");
let delFullname = document.getElementById("del-fullname");


delUsername.onclick = function() {
    sessionStorage.removeItem("username");
    document.getElementById("username").value = ""
}

delFullname.onclick = function() {
    sessionStorage.removeItem("fullname");
    document.getElementById("fullname").value = ""
}


/* <===============================================================================> */
