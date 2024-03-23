// event handling adalah cara membuat event di JavaScript
// kekurangan dari event handling adalah jika kita membuat dua event pada element yang sama, maka event sebelumnya akan ditimpa

/* <===============================================================================> */
/* <===============================================================================> */



let buttonName = document.getElementById("button-generate");

buttonName.onclick = function(){
    let showNumber = document.getElementById("show-number");
    showNumber.textContent = Math.random();
}

/* <===============================================================================> */
