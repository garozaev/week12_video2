//1. Округление
console.log(Math.floor(0.01));// округлит в лево до 0
console.log(Math.ceil(0.01));//округлит в право до 1
console.log(Math.round(0.01));// округлит по мат. принц. х > 0.5 до 1. нет 0
console.log((0.01234567).toFixed(2));// округлит до двух знаков

//2. случайные числа randome
console.log(Math.random());//выдаст случайное число от 0 до 1 (дробь)
console.log(Math.round(Math.random() * 100));//выдаст случ число от 0 до 100
// сделаем массив случайных чисел от 0до 100 с округлением
let arr = [];
arr.push(Math.round(Math.random() * 100));
arr.push(Math.round(Math.random() * 100));
arr.push(Math.round(Math.random() * 100));
arr.push(Math.round(Math.random() * 100));
console.log(arr);// выведет набор случ.чисел.
                 //при перезагрузки они будут менятся