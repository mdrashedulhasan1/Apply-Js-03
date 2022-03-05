function primeChecker(num){
 for(var i=2; i<num; i++){
     if(num%i==0){
         return "Not a Prime Number";
     }
 }
 return "Prime Number";
}
var primeOrNot = primeChecker(11);
console.log(primeOrNot);