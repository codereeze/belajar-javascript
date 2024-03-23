// menuliskan text hello world ke dalam console / terminal

// untuk menuliskan hello world kedalam console kita perlu menggunakan beberapa method dan dari masing-masing method tersebut mengeluarkan jenis pesan output yang berbeda sesuai dengan kegunaannya


/* <===============================================================================> */
/* <===============================================================================> */



// dalam bentuk informasi
console.log("Hello World!");
console.info("Hello World!");



// dalam bentuk error
console.error("Hello World!");



// dalam bentuk peringatan
console.warn("Hello World!");



// dalam bentuk penanda debug
console.debug("Hello World!");



// digunakan untuk membersikan console
console.clear();



// dalam bentuk group
console.group("Ini adalah Hello World");
console.log("Hello World!");
console.groupEnd();



// dalam bentuk tabel
console.table([{sayHello: "Hello World!"}, {katakanHello: "Hello Dunia!"}]);



// dalam bentuk waktu
console.time("Timer")
console.log("Hello World!");
console.timeEnd("Timer");





