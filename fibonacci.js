// 0,1,1,2,3,5,8,13
// fibo[2] = fibo[2-1]+fibo[2-2]
// fibo[3] = fibo[3-1]+fibo[3-2]
// fibo[4] = fibo[4-1]+fibo[4-2]
// fibo[5] = fibo[5-1]+fibo[5-2]
// fibo[n] = fibo[n-1]+fibo[n-2]

//Fibonacci series using Loop
// function fibonacci(n){
//     var fibo = [0,1];
//     for(var i=2; i<=n; i++){
//          fibo[i] = fibo[i-1]+fibo[i-2];
//     }
//     return fibo;
// }
// var fibonacciSeries = fibonacci(10);
// console.log(fibonacciSeries);
//

// Fibonacci Element in a Recoursive way
// function fibonacci(n){
//     if(n==0){
//         return 0;
//     }
//     else if(n==1){
//         return 1;
//     }
//     else{
//         return fibonacci(n-1)+fibonacci(n-2);
//     }
// }
// var fibonacci = fibonacci(4);
// console.log(fibonacci);


//Fibonacci Series in Recursive Way
// function fibonacci(n){
//     if(n==0){
//         return [0];
//     }
//     else if(n==1){
//         return [0, 1]
//     }
//     else{
//         var fibo = fibonacci(n-1);
//         var nextElement = fibo[n-1]+fibo[n-2];
//         fibo.push(nextElement);
//     }
//     return fibo;

// }
// var fibonacciSeries = fibonacci(5);
// console.log(fibonacciSeries);