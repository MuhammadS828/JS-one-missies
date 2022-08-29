//const cars = ['Mazda', 'BMW', 'Mercedes']
//console.log(cars)
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[2])
// console.log(cars[1])
// console.log(cars[10])

// cars[0] = 'Porshce'
// console.log(cars)
// cars[cars.length] = 'Toyota'
// console.log(cars)
 

// //Циклы 
// const cars = ['Mazda', 'BMW', 'Mercedes']
// for (let i = 0; i < cars.length; i++) {
    
//     const car = cars[i]
// console.log(car)
// }
                //Объектs
 const person = {
    firstName: 'Magomed',
    lastName: 'Supaev',
    year: 1998,
    languages: ['Ru', 'che', 'Eng'],
    hasWife: false,
    great: function () {
        console.log('Привет, пользователь!')
    },

 }
 console.log(person.firstName)
 console.log(person['lastName'])
 const key = 'year'
 console.log(person[key])
 person.great()
 person.hasWife = true
 console.log(person)

