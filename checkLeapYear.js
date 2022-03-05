// Leap Year - 1600, 2000, 2400
// Not Leap Year - 1700, 1800, 1900, 2100, 2200, 2300
// var year = 2000;
// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log("Leap Year");
//         }
//         else{
//             console.log("Not Leap Year");
//         }
//     }
//     else{
//         console.log("Leap Year");
//     }
// }
// else{
//     console.log("Not Leap Year")
// }


// Leap Year - 1600, 2000, 2400
// Not Leap Year - 1700, 1800, 1900, 2100, 2200, 2300
function checkLeapYear(year){
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                return "Leap Year";
            }
            else{
                return "Not Leap Year";
            }
        }
        else{
            return "Leap Year";
        }
    }
    else{
        return "Not Leap Year";
    }
}
var leapYearOrNot = checkLeapYear(1700);
console.log(leapYearOrNot);