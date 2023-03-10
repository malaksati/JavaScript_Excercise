/*
- Write a program that allows the user to insert 2 integers then print the maximum one
*/

var n1 = prompt("Enter number1: ")
var n2 = prompt("Enter number2: ")
function max(n1, n2) {
    var max = n1
    if(n2>max)
        max = n2;
    return max
}
console.log("Input: "+n1+" "+n2)
console.log("Max element= "+max(n1, n2))

/*- Write a program that take 3 integers from user then print the max element and the min element. 
*/

var n1 = prompt("Enter number1: ")
var n2 = prompt("Enter number2: ")
var n3 = prompt("Enter number3: ")
function max(n1, n2) {
    var max = n1
    if(n2>max)
        max = n2
    return max
}
function min(n1, n2) {
    var min = n1
    if(n2<min)
        min = n2
    return min
}
console.log("Input: "+n1+" "+n2+" "+n3)
console.log("Max element= "+max(max(n1, n2),n3))
console.log("Min element= "+min(min(n1, n2),n3))

/*-Write a program to enter marks of five subjects and calculate total, average and percentage.
Example
Input: - Enter Marks of five subjects: 95 ,76 ,58, 90, 89
Output: - Total marks = 435   Average Marks =87   Percentage =87*/

var m1 = parseInt(prompt("Enter mark 1: "))
var m2 = parseInt(prompt("Enter mark 2: "))
var m3 = parseInt(prompt("Enter mark 3: "))
var m4 = parseInt(prompt("Enter mark 4: "))
var m5 = parseInt(prompt("Enter mark 5: "))
let sum = m1+m2+m3+m4+m5
let average = sum/5
console.log("Input: ",m1," ",m2," ",m3," ",m4," ",m5)
console.log("Total marks = ",sum)
console.log("Average Marks = ",average)
console.log("Percentage = ",average,"%")


/*Bonus

-Write a JavaScript program which swap the case of each character for string. Example:
Input: 'Egypt'    //Output: 'eGYPT'
*/

let str = prompt("Enter String: ")
console.log("Input: "+str)
var newString  = '';
for(var i =0; i< str.length; i++){
    if(/^[A-Z]/.test(str[i])){
        newString+= str[i].toLowerCase();
    }else{
        newString+= str[i].toUpperCase();
    }
}
console.log("Output: "+newString)
/*-Write a program to calculate the factorial of a number
EX
factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120 */

var n1 = prompt("Enter number1: ")
function factorial(n) {
    if(n == 0)
        return 1;
    else
        return n* factorial(n-1)
}
console.log("Factorial of "+ n1 + " is equal = "+factorial(n1))