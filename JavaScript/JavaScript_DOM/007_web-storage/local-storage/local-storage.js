// localStorage digunakan untuk menyimpan data didalam storage web browser
// data ini tidak akan hilang meskipun kalian menutup tab
// data ini baru akan hilang jika dihapus manual, mereset browser, dan menguninstal browser

/* <===============================================================================> */
/* <===============================================================================> */


let buttonSubmit = document.getElementById("submit");


buttonSubmit.addEventListener("click", () => {
    let inputUsername = document.getElementById("username").value;
    let inputFullname = document.getElementById("fullname").value;

    // buat localStorage
    localStorage.setItem("username", inputUsername);
    localStorage.setItem("fullname", inputFullname);

    let showGreet = document.getElementById("show-greet");
    showGreet.textContent = `Selamat datang, ${localStorage.getItem("username")} atas nama ${localStorage.getItem("fullname")}`;
});


let clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", () => {
    localStorage.clear();
    document.getElementById("username").value = "";
    document.getElementById("fullname").value = "";
})

// hapus salah satu item
let delUsername = document.getElementById("del-username");
let delFullname = document.getElementById("del-fullname");


delUsername.onclick = function() {
    localStorage.removeItem("username");
    document.getElementById("username").value = ""
}

delFullname.onclick = function() {
    localStorage.removeItem("fullname");
    document.getElementById("fullname").value = ""
}


/* <===============================================================================> */
