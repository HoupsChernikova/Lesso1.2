var num = 33721;
var i = num % 10;

var i1 = Math.floor(num/10) % 10;
var i2 = Math.floor(num/100) % 10;
var i3 = Math.floor(num/1000) % 10;
var i4 = Math.floor(num/10000) % 10;

var multy = i*i1*i2*i3*i4;
console.log(multy, "произведение (умножение) цифр " + num +" числа");

var pow = multy**3;
console.log(pow, "Возведение в 3 степень");