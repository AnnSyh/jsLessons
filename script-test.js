'use strict'

var LeftBorderWidth = 1;
{
    let second = 2;

    console.log('second in = ', second);
}
const pi = 3.14;

console.log('LeftBorderWidth = ', LeftBorderWidth);
// console.log('second out = ',second);

var number = 5;
var string = 'Hello';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(8 / 0);
console.log('string' / 2);

let something;
console.log(something);

let person = {
    name: "Ivan",
    age: 20,
    isMarried: true
};
console.log(person.name);
console.log(person['name']);

let arr = ['red.jpg', 'blue.png', 'green.bmp', '1'];
console.log(arr[3]);

let answer = +prompt("Есть ли вам 18 ?", " ");

// console.log("typeof(answer) = ",typeof(answer));
// console.log("answer = " , answer);

// console.log("typeof(arr) = ",typeof(arr));
// console.log("typeof(nul) = ",typeof(null)); //оф признаная ошибка js

// console.log("sdsf" + "~ object");
// console.log("dff" + 1);

let incr = 10,
    decr = 10;

console.log('incr++ = ', incr++);
console.log('decr-- = ', decr--);

console.log('++incr = ', ++incr);
console.log('--decr = ', --decr);

console.log('(5%2) = ', 5%2);

console.log(' "2" == 2','2' == 2);
console.log(' "2" === 2','2' === 2);

let isChecked = true,
    isClose = true;


    console.log('isChecked && isClose = ', isChecked && isClose);
    console.log('!isChecked && isClose = ', !isChecked && isClose);


    console.log('isChecked || isClose = ', isChecked | isClose);
    console.log('!isChecked || !isClose = ', !isChecked | !isClose);
    

