// kita bisa membuat element HTML menggunakan JavaScript

/* <===============================================================================> */
/* <===============================================================================> */


let div = document.getElementById("template");

// membuat element paragraph di dalam div
let tagParagraph = document.createElement("p");
let textParagraph = document.createTextNode("Ini ada paragraph yang dibuat di JavaScript")

// beri style
tagParagraph.style.color = "red";

// beri attribut class dan id
tagParagraph.className = "paragraph-with-javascript";
tagParagraph.id = "paragraph";



// gabungkan tag p dengan text
tagParagraph.appendChild(textParagraph);

// gabungkan ke dalam tag div
div.appendChild(tagParagraph);



// silahkan inspect element di browser dan cek apakah ada tag p didalam tag div


/* <===============================================================================> */
