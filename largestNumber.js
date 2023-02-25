var number1 = 900;
var number2 = 2000;
var number3 = 300;
if(number1>number2 && number1>number3){
    console.log(number1);
}else if(number2>number3){
    console.log(number2);
}else{
    console.log(number3);
}


/* an altrnative way */

// var number1 = 900;
// var number2 = 2000;
// var number3 = 300;
// if(number1>number2){
//     if(number1>number3){
//         console.log(number1);
//     }else{
//         console.log(number3);
//     }
// }else{
//     if(number2>number3){
//     console.log(number2);
//     }
// }