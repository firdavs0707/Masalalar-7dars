// VAZIFA 1

// let progress = (value, x) => {
//   let res = 0;
//   let arr = [];
  
//   for (let i = value; i <= x * value; i += value) {
//   	var lastRes = res + i;
//     arr.push(lastRes)
//   }
//   return arr
// }

// progress(2, 10)

// VAZIFA 2

// let a = 2;
// let b = 7;
// let arr = [];

// if (a < b) {
//   for (let i = a; i <= b; i++) {
//     arr.push(i)
//   }
//   console.log(arr)
// } else {
//   console.log('a b dan kichkina bolishi kerak!')
// }

// VAZIFA UCH

// let YearToCentury = (year) => {
//   let res1 = year / 100
//   let res2 = Math.floor(res1);
//   let res3 = res2 * 100
  
//   if (year >= res3) {
//     let res4 = Math.ceil(res1);
//     return console.log(`${res4} Asr`);
//   }
  
// }

// YearToCentury(1201)

// VAZIFA 4

// let maxMultiple = (divisor, bound) => {
//   if (divisor < bound) {
//     let res1 = bound % divisor
//     let res2 = bound - res1;
//     return console.log(res2)
//   } else {
//     console.log('Bound must be smaller than divisor!')
//   }
// }

// maxMultiple(37, 200)