// slice adalah method pada objek string yang digunakan mengambil karakter melalui indeks

/* <===============================================================================> */
/* <===============================================================================> */

// contoh penggunaan

// indeks dimulai dari angka 0 bukan 1
// jika argument kedua lebih kecil dari argumen pertama maka, akan menghasilkan string kosong


let film = "tukang bubur naik haji";
console.log(film.slice(7)); // bubur naik haji
// pada contoh di atas saya mengambil mulai dari indeks ke 7



let nama = "aku Budi";
console.log(nama.slice(4,8)); // Budi
// pada contoh di atas saya mengambil mulai dari indeks ke 4 sampai indeks ke 8



// jika kalian memberiakan angka negatif maka urutan penghutungannya dimulai dari akhir string
let text = "Budi membeli buku";
console.log(text.slice(-12)); // membeli buku


console.log(text.slice(-12,-5)); // membeli
// hitung dari akhir (membeli buku), kemudian hitung lagi dari awal (membeli)


/* <===============================================================================> */
