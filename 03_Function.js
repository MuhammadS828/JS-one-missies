// // Functoin Declaration
// function great (name1) {
//     console.log('Привет - ', name1)
// }
// great('Лена')

// // //Function Expression
// // const great2 = (name1) => {
// // console.log('Привет 2 ' + name1)
// // }
//  // Анонимные функции.
//  let counter = 0
//  const interval = setInterval(function() {
//     if (counter === 5) {
// //     clearInterval(interval)}
// //     else {console.log(++counter)}

// //  }, 1000);

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// function sumAll(...all) {
//     const result = 0
 function sum(number) {
    let result = 0
for(let i = 0; i <= number; i++){
    result = result + i;
} return result;
}
console.log(sum(3))
 
 
 