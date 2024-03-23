// callback adalah teknik dalam pemrograman untuk memanggil kembali function/method yang dibuat, dalam bentuk function as parameter
// biasanya callback digunakan untuk pemrograman asinkron

/* <===============================================================================> */
/* <===============================================================================> */

let mathAsync = (callback, type, number1, number2) => {
    console.log("Mulai proses menghitung...");
    setTimeout(function(){
        let result = `${number1} ${type} ${number2}`
        callback(`Hasil dari ${number1} ${type} ${number2} = ${eval(result)}`);
    }, 1000)
}

console.log("Start Math");


mathAsync(function(result){
    console.log(result);
}, "+", 10, 20)

console.log("End Math");
