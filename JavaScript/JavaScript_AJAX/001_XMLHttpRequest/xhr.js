// AJAX adalah cara tradisional pengambilan data dari server
// XMLHttpRequest hanya dapat berjalan di browser

/* <===============================================================================> */
/* <===============================================================================> */

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data.setup);
    } else {
      console.log(`Request error with status: ${xhr.status}`);
    }
  }
};

// jika true = async && jika false = sync
xhr.open("GET", "https://v2.jokeapi.dev/joke/Any", true); // async
xhr.send();
