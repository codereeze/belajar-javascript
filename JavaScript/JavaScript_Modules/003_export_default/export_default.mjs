// export default sama seperti export biasanya, yang membedakannya adalah export default hanya boleh ada satu dalam satu module
// saat pengimportan module kita tidak perlu menyebutkan nama secara explisit dan tidak perlu kurung kurawal seperti export pada biasanya

/* <===============================================================================> */
/* <===============================================================================> */

function myFunction(name){
    console.log(`Hello my name is ${name}`);
}

export default myFunction
// disini kita mengexport myFunction sebagai default