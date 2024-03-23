// karena set tidak memiliki kunci (key), maka dibutukanlah method values untuk mengembalikan iterator yang berisi semua nilai dalam set

/* <===============================================================================> */
/* <===============================================================================> */


let providers = new Set(["Telkomsel", "Smartfren", "XL"]);

let getValues = providers.values();

// jalankan pada looping
for(const value of getValues){
    console.log(value);
}

/* <===============================================================================> */