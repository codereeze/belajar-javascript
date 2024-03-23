// berikut data yang di anggap truthy

/* 

"Halo" => string non-kosong dianggap truthy
123 => angka non-nol dianggap truthy
true => boolean true dianggap truthy
{} => semua object dianggap truthy
[] => semua array dianggap truthy

*/

// silahkan coba-coba dengan pengkondisian
// contoh

if("Halo"){
    console.log("Ini data truthy");
}else{
    console.log("Ini data falsy");
}