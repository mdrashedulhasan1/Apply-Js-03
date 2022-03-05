// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5

//Using For Loop
// var fact = 1;
// for(var i=1; i<=5; i++){
//     var fact = fact*i;
    
// }
// console.log(fact); // 5! = 120


// function factorial(num){
//     var fact=1;
//     for(var i=1; i<=num; i++){
//         fact = fact*i;      
//     }
//     return fact;
// }
// var factorialResult = factorial(5);
// console.log(factorialResult); // 5! = 120



//Using While Loop
// var i=1;
// var fact=1;
// while(i<=5){
//     fact = fact*i;
//     i++;
// }
// console.log(fact);


// function factorial(num){
//     var i=1;
//     var fact=1;
//     while(i<=num){
//         fact = fact*i;
//         i++;
//     }
//     return fact;
// }
// var factorialResult = factorial(5);
// console.log(factorialResult); // 5! = 120


//Factorial in Recursive Way
// function factorial(num){
//     if(num==0){
//         return 1;
//     }
//     else{
//         return num*factorial(num-1);
//     }
// }
// var factorialResult = factorial(5);
// console.log(factorialResult); // 5! = 120