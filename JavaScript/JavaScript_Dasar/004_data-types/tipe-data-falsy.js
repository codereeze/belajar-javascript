// berikut data yang dianggap falsy

/* 

"" => string kosong dianggap falsy
0 => angka nol dianggap falsy
false => boolean false dianggap falsy
undefined => undefined dianggap falsy
null => null dianggap falsy
NaN => NaN dianggap falsy

*/

// silahkan coba-coba dengan pengkondisian
// contoh

if(null){
    console.log("Ini data truthy");
}else{
    console.log("Ini data falsy");
}