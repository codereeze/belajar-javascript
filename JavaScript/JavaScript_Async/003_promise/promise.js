// Promise adalah adalah object yang meawakili nilai yang belum tersedia, namun akan tersedia pada suatu waktu dimasa depan
// promise dapat diibaratkan seperti janji, janji ini punya dua kemungkinan yaitu ditepati, diingkari

/* <===============================================================================> */
/* <===============================================================================> */

function activity(data){
  return new Promise((resolve, reject) => {
    if(data == 'Baca Buku'){
      resolve('Kamu akan menjadi pintar');
    }else{
      reject('Kamu akan menjadi bodoh');
    }
  });
}

activity('Baca Buku').then((result) => {
  console.log(result);
}).catch(error => {
  console.log(error);
})
