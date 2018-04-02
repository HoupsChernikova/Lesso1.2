/*var num = 33721;
var i = num % 10;

var i1 = Math.floor(num/10) % 10;
var i2 = Math.floor(num/100) % 10;
var i3 = Math.floor(num/1000) % 10;
var i4 = Math.floor(num/10000) % 10;

var multy = i*i1*i2*i3*i4;
console.log(multy, "произведение (умножение) цифр " + num +" числа");

var pow = multy**3;
alert ("Возведение в 3 степень " + pow);*/

/*
let x = 5; 
//alert( x++ );
console.log(x++)

var arr=[];
var string=arr + false - null + true 
console.log(string)
*/
/*
let y = 1; 
let x = y = 2; 
console.log(x);
alert(x); 
*/
/*
var arr=[];
var string=arr + 1 + 2
console.log(string)
*/
/*
var two=2;
var one=1;
var string= two && one && null && undefined;
console.log(string);*/

var str = 'урок-3-был-слишком-легким';
console.log(str);
var arrayOfChar = str.split('');
arrayOfChar[0] = arrayOfChar[0].toUpperCase();
var strNew = arrayOfChar.join('');
console.log(strNew);
strNew = strNew.replace(/\-/g, " ");
console.log(strNew);
/*
var strOld = strNew.replace(/легким/g, "");
console.log(strOld);
*/

   var strOld = strNew.split(' ');
    strOld.pop();
    var strFinish= strOld.join(' ');

console.log(strFinish);
arrayOfChar = strFinish.split('');
arrayOfChar[arrayOfChar.length-1] = 'o';
arrayOfChar[arrayOfChar.length-2] = 'o';
strFinish = arrayOfChar.join('');
console.log(strFinish);
