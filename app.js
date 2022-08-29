
// function sum(arr) {
//     let result = 0
//     for(let i = 0; i <= arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             result += arr[i]
//         }
    
//     } console.log(result)
// } console.log(sum([1, 3, 4, 6, 9 ,7]));

// // if (1 && 0) { // вычисляется как true && false
// //     alert( "не сработает, так как результат ложный" );
// //   } 

// function numbers(num) {
//     for (let i = 0; i < num.length; i++) {
//         if(num[i] > 0 ){
//                num[i] = num[i] * -1;
//         }
   
//          }
//       return num ;
//    }
// // //    console.log(numbers([2, -3, 4, 5, -6, 7]))

// // let fruits = ["Яблоко", "Апельсин", "Груша"];

// // alert( fruits.pop() ); 
// // console.log(fruits);
// // let arr = ["Яблоко", "Апельсин", "Груша"];

// // for (let i = 0; i < arr.length; i++) {
// //   alert( arr[i] );
// // } console.log(arr[2]);
//  let result = 0;
//  for (i = 4; i <= 400; i++) {
//     result += i + ' '
// //  }console.log(result);

// // let result = 0
// // for (i=4; i<=13; i=i+3){
// //     result += i + ' ';
// // } console.log(result);
// let result = 0
// for (i=654; i>=0; i--) {
//     result = result + i + ' ';
// // } console.log(result)

// //Вывести все годы с 1983 до 2017
// let result = 0
// for (i=1983;i<=2017;i++) {
//     result += i + ' ';
// } console.log(result);

// вывести -4 -2 0 2 4 до 100

// let result = 0
// for (i=-4;i<=100;i=i+2) {
// //     result = result + i + ' '
// // }
// // console.log(result);
// let number = 0;
// for (i=1; i<=9; i++) {
//     number = number + 7*i + ' ';
//



// } console.log(number); 
// function inicials(oneName, twoName, threeName) {
// //     return `${oneName} ${twoName[0]} ${threeName[0]}` 
// // }  console.log(inicials('Интукод', 'Джаваскриптов', 'Объектович'));

// Напиши функцию, которая принимает массив из чисел. Функция должна вернуть
// сумму всех нечетных чисел массива
// function sum(arr) {
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2  !== 0) {
//             result += arr[i]
//         }
//     }  return result;
// }
//    console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// // Напиши функцию, которая принимает на вход два массива из чисел. Функция
// // должна вернуть true , если сумма чисел из обеих массивов одинаковая, иначе
// // функция должна вернуть false .

// function comparisonArray (arr1, arr2) {
//     let sumArray1 = 0
//     for (let i = 0; i < arr1.length; i++) {
//         sumArray1 += arr1[i]
//     } let sumArray2 = 0 
//     for (let y = 0; y < arr2.length; y++) {
//         sumArray2 += arr2[y]
//     }  if ( sumArray1 === sumArray2) {
//         return true
//     }   else {
//         return false
//      }
//  }
//  console.log(comparisonArray([1, 2, 3, 4, 5], [5, 9, 3, 2, 1]))


//    Напиши функцию, которая принимает на вход три параметра. В первом параметре
// передается массив из чисел, во втором параметре передается искомое число, а в
// третьем количество повторений этого числа. Функция должна вернуть true , если в
// массиве указанное во втором параметре число повторяется указанное в третьем
// // параметре количество раз

// function qwe(arr, letter, count) {
//      let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//           if (arr[i] === letter) {
//             arr1.push(arr[i])}
//         } if (arr1.length === count) {
//             return true
//         } else {return false}
// }
//   console.log(qwe([1, 1, 1, 2, 55, 135, 2, 555, 55, 135], 1, 3));

// function qwe1(arr, letter, count) {
//     let result = 0
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === letter) {
//            result++
//         } 
//     } return result === count;
// } console.log(qwe1([1, 5, 1, 3, 1, 5 , 5, 5], 1, 3));

// function func(arr, searchNum, repeat) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === searchNum){
//             count++;
//         }
//     }
//     return count === repeat;

// Используя цикл for выведи в консоль числа от 100 до 0 с шагом 3 (100, 97, 94 и
// //     т.д.)
// let result = 0
// for (let i = 100; i >= 0; i = i - 3){
//     result += i + ' ';
// } console.log(result)


// Напиши функцию, которая принимает два параметра: массив имен и число.
// // Функция должна вернуть массив, в котором остались только те имена, длина
// // которых соответствует указанному во втором параметре числу
// function retArr(nameArr, letter) {
//      let Arr = []
//      for (let i = 0; i < nameArr.length; i++) {
//         if (nameArr[i].length === letter) {
//         Arr.push(nameArr[i]);
//         }
//      }   return Arr 

// } console.log(retArr(['maga', 'saba', 'sdassa', 'fdsfdff', 'dfffdfsdf', 'efef'], 4));


// Напиши функцию, которая принимает два параметра: массив из слов и текст.
// Функция должна вернуть true , если в тексте встречается хотя бы одно из
// указанных в массиве слов.
// Подсказка: при решении можно использовать метод indexOf() или includes() .
// Разрешается загуглить во время экзамена.
// function searchWord(words, text) {
// // тут твой код
// }
// console.log(searchWord(['js', 'css', 'php'], 'я изучаю css')); // true
// console.log(searchWord(['js', 'css', 'php'], 'intocode изменил мою жизнь')); // false
// // console.log(searchWord(['js', 'css', 'php'], 'я изучаю css и js')); // true

//  let arr = []
//  for (let i = 1; i <=10; i++) {
//     arr.push(i)
//  } console.log(arr);

// let arr = [1, -2, -3, 4, -5, 7, -9, 8, 10, -12]
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         arr2.push(arr[i]);
//     }
// }console.log(arr2);

// // Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
// // let arr = [1, 2, 3, 4, 5];


// let arr = [1, 2, 3, 4, 5];
//  for (let i = 0; i < arr.length; i++) {
// //      arr[i] = arr[i] - 1;
// //  } console.log(arr);

// let arr = []
// for (let i = 1; i <= 99; i++) {
//     if (i % 2 !== 0) {
//      arr.push(i);}
// } console.log(arr)

// // Подсчитайте количество цифр 3 в этом массиве.
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         result++
//     } 
// }console.log(result);


// Напиши функцию, которая принимает два параметра: массив из слов и текст.
// Функция должна вернуть true , если в тексте встречается хотя бы одно из
// указанных в массиве слов.
// Подсказка: при решении можно использовать метод indexOf() или includes() .
// Разрешается загуглить во время экзамена.
// function searchWord(words, text) {
// // тут твой код
// }
// Вступительные испытания 4
// console.log(searchWord(['js', 'css', 'php'], 'я изучаю css')); // true
// console.log(searchWord(['js', 'css', 'php'], 'intocode изменил мою жизнь')); // false
// console.log(searchWord(['js', 'css', 'php'], 'я изучаю css и js')); // true

// function searchWord(words, text) {
     
    
// } console.log(searchWord(['js', 'css', 'php'], 'я изучаю css')); 




// Напиши функцию, которая принимает массив из чисел и возвращает новый
// // массив, из двух чисел: самого большого и самого маленького.
// function opposition(numbers) {
//     let arr = [];
//   let result = numbers[0];
//   let result2 = numbers[0]
//   for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > result) {
//         result = numbers[i]
//       } if (numbers[i] < result2) {
//         result2 = numbers[i]
//       }
//     } arr.push(result, result2)
//     return arr
//   } console.log(opposition([1, -4, 6, -144, 5])); // [-144, 6]





//






//   }  arr.push(result); 
  

//   for (let j = 0; j < numbers.length; j++) {
//        if (numbers[j] < result2) {
//         result2 = numbers[j]
//        } 1
//   }      arr.push(result2);   
//   return arr
  
// }
// console.log(opposition([1, -4, 6, -144, 5])); // [-144, 6]


// Напиши функцию, которая принимает два параметра: текст и число. Если
// количество слов в данном тексте не превышает указанное число, то функция
// должна вернуть текст без изменений. Иначе функция должна вернуть только
// указанное количество слов, а на конце добавить троеточие.
// Подсказка: при решении можно использовать метод split() . Разрешается
// загуглить во время экзамена.

// console.log(cutText('Всё в мире подорожало', 5))

// function cutText1(str,num) {
//   let arrStr = str.split(' ');
//   let arr1 = [];
//   let result = ''
  
//   if (arrStr.length <= num) {
//     result = arrStr.join(' ');
//   } else {
//   for (let i = 0; i < num; i++) {
//      arr1.push(arrStr[i]) 
//     }result = arr1.join(' ') + '...'
//    }
//     return result;
//   }
// console.log(cutText1('Без культур нет мультур Стетхем', 2))

// const cutText = (str,num) => {
//   let arr = str.split(' ');
//   let result = [];
// if (arr.length <= num){
//   return str
// }else{
//   for (let i = 0; i < num; i += 1){
//           result.push(arr[i])
// }
// }
// return result.join(' ') + '...';
// };

// const arr = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9]
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     result += arr[i];
//   }
// }console.log(result)

// Напиши функцию, которая принимает массив городов
//  и возвращает новый массив только тех, в названии которых
// // четное количество букв
// function towns (cities) {
// let arr = [];
// for (let i = 0; i < cities.length; i++) {
//   if (cities[i].length % 2 !== 0) {
//     arr.push(cities[i])
//   }
// }return arr
// } console.log(towns(["Москва", "Псков", "Новосибирск", "Омск", "Хабаровск"]))
// //  

// const nums = [1,2, -4 ,39,-64]


// напиши код, который изменяет значения чисел массив от положительных , в отрицательные и нааборот


// положительные станут отрицательными а отрицательные положительными

// function plusMinus(arr) {
// for (i = 0; i < arr.length; i++) {
//   arr[i] = arr[i]- 1;
// } return arr
// } console.log(plusMinus([1, 2]))

// console.log(number);

// function ewq(number) {
//   for (let i = 0; i < number.length; i++) {
// //     number[i] = number[i] * -1;
// //   } return number
// // } console.log(ewq([1, 2, 3, 4, 9]))

// function plusMinus(arr) {
//   for (let i = 0; i < arr.length; i ++) {
//         arr[i] = arr[i] * -1;
//   }  return arr
// }    console.log(plusMinus([1, 2, 3, 4, 5]))


// // Напишите цикл for, который печатает степени 3, не превышающие 10 000
// let q = 10000;
// for (let i = 3; i <= q; i*=3) {
//   console.log(i)
// }; 

// // напишите функцию которая возводит число a в число b и и елси это числоц четное возварщает тру, иначе фелсе

// let arr = ['hucuev']
//   let arrSplit = arr[0].split('')
//   for (i = arrSplit.length-1; i >= 0; i--) {
//     console.log(arrSplit[i])
//   } 
 

// // let str = 'supaev'
// // for(let i = str.length - 1; i >= 0; i--){
// //   console.log(str[i])
// // } 

// function searchWord1(words, text) {
//   let text1 = text.split(' ')

//   for(let i = 0; i < words.length; i++){
//     if(text1.includes(words[i])){
//        return true 
//     } else {
//       return false
//     }
//   }  
//   }  console.log(searchWord1(['asfs', 'css', 'php'], 'я изучаю css')); // true




// function searchWord(words, text) {
//   let text1 = text.split(' ');
//   let result = false;

//   for(let i = 0; i < words.length; i++){
//       if(text1.includes(words[i])){
//        result = true
//       } 
      
//       }  return result
//   }  console.log(searchWord(['js', 'm', 'dadas', 'gg'], 'я изучаю mmm'));

// напишите функцию которая возводит число a в число b и и елси это числоц четное возварщает тру, иначе фелсе

// // Задача. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
 
// let arr = [1, 2, 3, 4, 5]
// let result = 1
// for (let i = 0; i < arr.length; i++) {
// result *= arr[i]
// console.log(result); 
// }



// function f(arr){
//     let max = arr[0].length
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i].length > max){
//         max = arr[i]
//       }
//     } return max
//     }console.log(f(['adddd', 'ddd', 'd']))

// let arr = ['qsdfsdfsdfsdfsf', 'fsdfsdfsd', 'dfds', 'sdgsfd'];
// let result = arr[0].length
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > result) {
//         result = arr[i]
//     } else {result = arr[0];}
//     console.log(result);
// }


// function f(arr){
//     let max = arr[0].length
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i].length > max){
//         max = arr[i]
//        } else { max = arr[0]
//       }
//      } return max
//     }console.log(f(['ad', 'ddd', 'd']))

// let arr = [1, 5, 3, 10, 30, 13];
// let sum = 0
// for(let i = 0; i < arr.length; i++){
// //     arr[i] = arr[i].toString();
// //     if(arr[i][0] == 1 || arr[i][0] == 2){
// //         sum += parseInt(arr[i])
// //     }
// // }
// // console.log(sum);
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
   
// } console.log(sum);



// let arr = [1, 2, 5, 4, 7, 13, 10];
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] == 4) {
// console.log('Есть!');
// break;
// }
// }

// let arr = [10, 20, 30, 50, 235, 3000]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].toString();
//     if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
//         console.log(parseInt(arr[i]))
//     }
//  }

// let arr = [1, 2, 3, 10, 20];
// let sum = 0
// for (i = 0; i < arr.length; i++){
//     arr[i] = arr[i].toString();
//     if(arr[i][0] == 1 || arr[i][0] == 2){
//         sum += parseInt(arr[i])
//     }
// }
// console.log(sum)


// arr = ['a', 'b', 'c', 'd', 'e']
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
		
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i])
//     }
// }

// // Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.

// let arr = [1, 2, 3, 4, 5]
// let result = 1
// for (let i = 0; i < arr.length; i++) {
// result = result * arr[i];
// }consaole.log(result);

// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 4, 5] 
// let result = 0
//     for (let i = 0; i < arr.length; i++) {
//      result = result + (arr[i]**2)
//     }console.log(result);



// Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы 
// массива, которые больше 3-х, но меньше 10. 
// let arr =q [2, 5, 9, 15, 1, 4]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i])
//   let  }
// }
// let arr = [1, 3, 5, -3, -5, 29, -345]
// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         result += arr[i]
//     }
// }console.log(result);

// Дан массив arr. Найдите среднее арифметическое 
// его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

// let arr = [1, 2, 3, 4, 5]
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result = result + arr[i];
// } let q = result / arr.length;
// console.log(q)

// Дан массив с числами. Выведите элементы этого массива в обратном порядке.
// let arr = [1, 2, 3, 4, 5]
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
// }
// lан массив с числами. С помощью цикла выведите на экран
//  все элементы, значение которых совпадает с их порядковым номером в массиве.
// let arr = [0, 1, 2, 3, 8, 9, 52, 7]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === i) {
//         console.log(arr[i])
//     }
// }
// Напишите функцию, которая убирает повторяющиеся значения.
// let data = [1, 2, 1, 2, 3];
// for (let i = 0; i < data.length; i++) {
//     if (data[i] = data[i]) {
//         data.slice([i]);
//     }
// }
// const q = 'sdfsfsdfdsfe'
// console.log(q[q.length-1])

// Написать функцию pow(a, b), которая возводит а в степень b и возвращает результат. 
// Например pow(2, 2) ----> 4 (Решать с циклом фор)

// function pow (a, b) {
//     let result = a
//     for (let i = 2; i <= b; i++){
//         result = result * a;
//     } return result;
// }  console.log(pow(3, 5))

// let result = 1;
// function pow(a, b){
//   for(let i = 1; i < b; i++){
//     result *= a
//   }return result
 
// }console.log(pow(3, 5));


// Напиши функцию, которая принимает три параметра: имя, фамилию и отчество.
// Функция должна вернуть строку, в которой фамилия будет полностью, а вместо
// Вступительные испытания 2
// имени и отчества будут инициалы.
// function initials(firstname, lastname, surname) {
// return `${lastname} ${firstname[0]}.${surname[0]}.`
// }
// console.log(initials('Интукод', 'Джаваскриптов', 'Объектович'))
// должен вывести "Джаваскриптов И.О."


// Напиши функцию, которая принимает массив из чисел. Функция должна вернуть
// сумму всех нечетных чисел массива.
// function sum(numbers) {
//   let result = 0
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     result += numbers[i]
//   }
//  }  return result
// }
// console.log(sum([1, 3, 6, 11, 98, 7, 1]))
// должен вернуть 23, т.к. 1 + 3 + 11 + 7 + 1 = 23

// Напиши функцию, которая принимает на вход два массива из чисел. Функция
// должна вернуть true , если сумма чисел из обеих массивов одинаковая, иначе
// функция должна вернуть false 
// function hasEqualSums(first, second) {
// let resultFirst = 0;
// let resultSecond = 0;
// for (let i = 0; i < first.length; i++) {
//   resultFirst += first[i];
  
// } for (let j = 0; j <  second.length; j++) {
//   resultSecond += second[j]
// } return resultFirst === resultSecond
// }
// console.log(hasEqualSums([11, 22], [1, 20, 10, 1, 1]));
// // должен вернуть true, т.к. 11+22=33 и 1+20+10+1+1=33
// console.log(hasEqualSums([4, 4], [3, 6]));
// // должен вернуть false, т.к. 4+4=8, а 3+6=9




// Напиши функцию, которая принимает на вход три параметра. В первом параметре
// передается массив из чисел, во втором параметре передается искомое число, а в
// третьем количество повторений этого числа. Функция должна вернуть true , если в
// массиве указанное во втором параметре число повторяется указанное в третьем
// параметре количество раз.
// Вступительные испытания 3
// function repeatsXTimes(numbers, needle, count) {
// let result = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === needle) {
//     result += 1;
//   }
// } return result === count
// }
// console.log(repeatsXTimes([1, 5, 1, 3, 1], 1, 3));
// // должен вернуть true, потому что число 1 встречается в массиве 3 раза
// console.log(repeatsXTimes([4, 1, 3, 3, 8], 3, 4));
// // должен вернуть false, потому что число 3 НЕ встречается в массиве 4 раза



// Используя цикл for выведи в консоль числа от 100 до 0 с шагом 3 (100, 97, 94 и  т.д.)
  // for (let i = 100; i >=0; i-=3) {
  //   console.log(i)
  // }


//   Напиши функцию, которая принимает два параметра: массив имен и число.
// Функция должна вернуть массив, в котором остались только те имена, длина
// которых соответствует указанному во втором параметре числу.
// function filterNames(arr, letter) {
//   let arr2 = []
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length === letter){
//      arr2.push(arr[i])
//   }
// } return arr2
// }
// console.log(filterNames(['into', 'code', 'js', 'html', 'git'], 4));
// должен вернуть массив ['into', 'code', 'html']


// function cutText(text, num) {
//   let arr = text.split(' ');
   
//     if (arr.length <= num) {
//       return text;
//     } else {
      
//       return `${arr.slice(0, num)}...`
//     };
    
//   };
// console.log(cutText('я очень тебя люблю дура ты тупая', 4))


// const f = arr => {
//   let num = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0){
//       num += arr[i]
//     }
//   }
//   return num
//   };
//   console.log(f([1, 3, 5, 17, 95, 2, 4, 6, 75]));



// Даны массив arr_1= [101, 202, 303, 404, 505] и arr_2 = [606, 707, 808, 909] - 
// создайте третий массив superArr который будет результатом "слияния" предыдущих двух.  
// Результатом должен быть массив superArr = [101, 202, 303, 404, 505, 606, 707, 808, 909] ;

// let arr_1= [101, 202, 303, 404, 505]

// let arr_2 = [606, 707, 808, 909]

// let arr3 = [];
//  for (let i = 0; i < arr_1.length; i++) {
//   arr3.push(arr_1[i])
//  }  
//  for (let j = 0; j < arr_2.length; j++) {
//   arr3.push(arr_2[j])
//  }
//  console.log(arr3)

// let arr4 = [...arr_1, ...arr_2]

// console.log(arr4)


// Напиши функцию, которая принимает два параметра: массив из слов и текст.
// Функция должна вернуть true , если в тексте встречается хотя бы одно из
// указанных в массиве слов.
// Подсказка: при решении можно использовать метод indexOf() или includes() .
// // Разрешается загуглить во время экзамена.
// function searchWord(words, text) {
//   let result = false
//   let textArr = text.split(' ')
//  for (let  i = 0; i < words.length; i++) {
//   if (textArr.indexOf(words[i]) !== -1) {
//     result = true
//   } 
//  } return result
// }

// console.log(searchWord(['js', 'css', 'php'], 'я изучаю css')); // true
// console.log(searchWord(['jq', 'css', 'php'], 'intocode изменил мою жизнь')); // false
// console.log(searchWord(['jq', 'css', 'php'], 'я изучаю css и js')); // true



// function opposition(numbers) {
//   let result = numbers[0]
//   let result2 = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//  if (numbers[i] > result) {
//   result = numbers[i]
//  } if (result2 >  numbers[i]) {
//   result2 = numbers[i]
//  }
//   }return [result, result2]

// }

// console.log(opposition([1, -4, 6, -144, 5])); // [-144, 6]











// Напиши функцию, которая принимает массив из чисел и возвращает новый
// массив, из двух чисел: самого большого и самого маленького.
// function opposition(numbers) {
//   let min = numbers[0]
//   let max = numbers[0]
//   for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] < min){
//       min = numbers[i]
//     }
//     if (numbers[i] > max){
// max = numbers[i]
//     }
    

//   }
//   return [min, max]
// }
  
// console.log(opposition([1, -4, 6, -144, 5])); // [-144, 6]

// Напиши функцию, которая принимает два параметра: текст и число. Если
// количество слов в данном тексте не превышает указанное число, то функция
// должна вернуть текст без изменений. Иначе функция должна вернуть только
// указанное количество слов, а на конце добавить троеточие.
// Подсказка: при решении можно использовать метод split() . Разрешается
// загуглить во время экзамена.
// function cutText(text, number){
//   let textArr = text.split(' ')
//   if(textArr.length <= number){
//     return textArr.join(' ')
//   }else{
//     return textArr.slice(0, number).join(' ') + '...'
//   }
// }

// console.log(cutText('Всё в мире подорожало', 5))
// // должен вернуть "Всё в мире подорожало", т.к. количество слов в тексте не больше 5
// console.log(cutText('Программа работает не так, как надо', 2))
// // должен вернуть "Программа работает...


// const F = (array1, array2) => { 
//   let sum1 = 0; 
//   let sum2 = 0; 
//   for (let i = 0; i <= array1.length; i++) { 
//     sum1 = sum1 + [i]; 
//   } 
//   for (let i = 0; i <= array2.length; i++) { 
//     sum2 = sum2 + [i]; 
//   } 
 
//   return sum1 === sum2; 
// }; 
 
// console.log(F([1, 3, 6, 11, 7, 1], [1, 3, 6, 11, 7, 1]));



// Реализуйте функцию, которая возвращает из массива среднее арифметическое значение отрицательных чисел

// function srArr (arr) {
// let sum = 0;
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0){
//   sum = sum + arr[i]
//   count++
// }
// } return (sum / count)
// } console.log (srArr([1, -4, 5, 66, -1, 5, -66]))




// Напиши функцию, которая принимает массив из слов и возвращает новый, откуда удалены все пустые значения.

// function deleteEmptyItems(words) {
//   let arr = []
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] !== '') {
//       arr.push(words[i])
//     }
//   } return arr
// }

// console.log(deleteEmptyItems(['js', '', 'css', 'html', '', ''])); // ['js', 'css', 'html']



// Напиши функцию, которая принимает массив из слов и возвращает другой массив, 
// где вместо каждого слова стоит его длина.

// function qwer(words) {
//   let arr = []
//   for (let i = 0; i < words.length; i++) {
//     arr.push(words[i].length)
//   }return arr
// }

// console.log(qwer(['redux', 'react', 'node', 'js'])); // [5, 5, 4, 2]



// Напиши функцию, которая принимает массив и возвращает такой же, но в перевернутом виде.
//  При решении нужно использовать обратный цикл.

// function reverseArray(words) {
//   let arr = []
//   for (let i = words.length - 1; i >= 0; i--) {
//     arr.push(words[i])
//   } return arr
// }

// console.log(reverseArray(['redux', 'react', 'node', 'js'])); 
// // ['js', 'node', 'react', 'redux']


// Напиши функцию, которая принимает число и возвращает массив из чисел от 1 до указанного числа.

// function generateArrayOfNumbers(number) {
//   let arr = []
//   for (let i = 1; i <= number; i++) {
//      arr.push(i)
//   } return arr
// }

// console.log(generateArrayOfNumbers(5)); // [1, 2, 3, 4, 5]




// function qwer(array) {
// let arr = []
// for (let i = 1; i < array.length; i+=2) {
//   arr.push(array[i])
// } return arr

// } console.log(qwer([1, 2, 3, 4, 5, 6, 7, 8, 9]))


// Напиши функцию, которая получает массив из чисел и возвращает новый массив,
// //  где все числа умножены на себя.

// function multiplyEveryNumber(numbers) {
//   let arr = []
//   for (let i = 0; i < numbers.length; i++) {
//     arr.push(numbers[i] ** 2)
//   } return arr
// }

// console.log(multiplyEveryNumber([2, 2, 6, 5])); // [4, 4, 36, 25]


let y = 2 ** 53-1
console.log(y)