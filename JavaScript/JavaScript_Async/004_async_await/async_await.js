// async/await adalah fitur yang digunakan untuk menangani hasil dari sebuah promise
// ketika kita mendefinisikan function dengan kata kunci async maka function tersebut akan menghasilkan sebuah promise
// await digunakan untuk menunggu hasil dari proses promise
// penggunaan await harus dibarengi dengan async

/* <===============================================================================> */
/* <===============================================================================> */

async function machine(data) {
  return new Promise((resolve, reject) => {
    console.log("Menunggu mesin menyala...");
    if (data == "on") {
      setTimeout(() => {
        resolve("Mesin berhasil menyala");
      }, 1000);
    } else {
      reject("Mesin gagal menyala");
    }
  });
}

async function toggleButton() {
  try{
    let result = await machine("off");
    console.log(result);
  }catch(error){
    console.log(error);
  }
}

toggleButton()
