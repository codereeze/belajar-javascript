// get date method adalah method yang digunakan untuk mengambil data waktu
// berikut merupakan method-method nya
/* 
- getFullYear() => digunakan untuk mengambil data tahun
- getMonth() => digunakan untuk mengambil data bulan
- getDate() => digunakan untuk mengambil data tanggal
- getDay() => digunakan untuk mengambil data hari dengan format 0-6
- getHours() => digunakan untuk mengambil data jam
- getMinutes() => digunakan untuk mengambil data menit
- getSeconds() => digunakan untuk mengambil data detik
- getMiliseconds() => digunakan untuk mengambil data milidetik
- getTime() => digunakan untuk mengambil data waktu yang dihitung mulai dari bulan Januari tanggal 1 tahun 1970
*/

/* <===============================================================================> */
/* <===============================================================================> */

let myDate = (date) => {
  let currentDate = date == undefined ? new Date() : new Date(date);

  console.log(currentDate.getFullYear());
  console.log(currentDate.getMonth());
  console.log(currentDate.getDate());
  console.log(currentDate.getDay());
  console.log(currentDate.getHours());
  console.log(currentDate.getMinutes());
  console.log(currentDate.getSeconds());
  console.log(currentDate.getMilliseconds());
  console.log(currentDate.getTime());
};

// ambil data dengan tanggal yang ditentukan 
myDate("2020-05-25")

console.log();

// ambil data saat ini
myDate()

/* <===============================================================================> */
