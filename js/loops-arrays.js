// let counter = 42;
// // Цикл з передумовою
// while (counter <= 5) {
//     console.log(counter);
//     counter++;
// }

// Цикл з постумовою
// do {
//   console.log(counter);
//   counter++;
// } while (counter <= 5);

// Цикл з лічильником
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Ключові слова (стараємося уникати):
// break - перериває цикл
// continue - починає нову ітерацію 

// Масиви
const cars = ['Jeep Renegade', 'Mazda MX-5', 'BMW Z4'];
// console.log(cars);
cars.push('Audi Q8');
cars.push('Volkswagen Touareg');
 
// for (let i = 0; i < cars.length; i++) {
//     console.log(i, cars[i]);
// }

// Вивести останній
// console.log(cars[cars.length-1]);
// console.log(cars.at(-1));

cars.sort().reverse();

const sortedCars = cars.toSorted();

// Спеціальний цикл для обходу масивів
for (const car of cars) {
    console.log(car);
}

const nums = [100, 1, 10, 42, 4, 12];

nums.sort( (a, b) => b - a );

nums.forEach( num => console.log(num) );

// console.log(nums);

// let a = 1;
// let b = ++a; // b = 2, a = 2
// let b = a++; // b = a, a = 2
// console.log({a}, {b});
