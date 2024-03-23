// menggunakan addEventListener adalah cara yang paling direkomendasikan
// jika kita membuat dua event atau lebih pada element yang sama, maka tidak akan menimpa event sebelumnya

/* <===============================================================================> */
/* <===============================================================================> */


// copy text
let inputText = document.getElementById("input-text");
let copyText = document.getElementById("copy-text");

inputText.addEventListener("input", function(e){
    copyText.textContent = e.target.value;
})


// clear button
let clearText = document.getElementById("clear");

clearText.addEventListener("click", function(){
    copyText.textContent = "";
    inputText.value = "";
})

/* <===============================================================================> */
