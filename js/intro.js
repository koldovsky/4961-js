// Змінні в JS
// const - змінна, що не змінюється
// let - змінна, що має бути змінена
// var - не використовуємо, застаріло
// EcmaScript - це офіційна назва мови
// 1.0 - 1997
// 2.0 - 1998
// 3.0 - 1999
// 5.0 - 2009
// 5.1 - 2011
// 2015 (6.0) - 2015
// const message = 'Привіт, JavaScript';
// alert(message);

// Типи даних
// string - текст: '??', "??", `??`
// number - 42, -42, 4.2, 4e42, NaN, +Infinity / -Infinity
// boolean - true, false

// let variable = 'hello';
// console.log(typeof variable, variable);

// variable = 42;
// console.log(typeof variable, variable);

// variable = true;
// console.log(typeof variable, variable);

// Додаткові типи
// undefined - не визначено (пусто і нічого не було)
let someData;
console.log(typeof someData, someData);

// null - пусто (але могло щось бути)
someData = null;
console.log(typeof someData, someData);

// Object - об'єкт

// Не будемо вивчати курсі
// Symbol - унікальний ідентифікатор
// BigInt - великі цілі числа

// Числа
// Оператори: +, -, *, /, % (залишок від ділення)

const userAge = Number(prompt("Введіть ваш вік"));
console.log("Поточний вік", userAge);

const nextAge = add(userAge,  1);
console.log("Наступний вік", nextAge);

// Boolean
if (userAge >= 18) {
  // > < === !== >= <= && || !
  console.log("Повнолітній");
} else {
  console.log("Неповнолітній");
}

// Тернарний оператор
const userStatus = userAge >= 18 ? "Повнолітній" : "Неповнолітній";
console.log(userStatus);

// Як зробити функцію
function add(a, b) {
  return a + b;
}
