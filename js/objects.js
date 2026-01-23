// Об'єктний літерал

const bmwX5 = {
  make: "BMW",
  model: "X5",
  price: 50000,
  beep: function () {
    console.log(`${this.make} ${this.model} beep beep!`);
  },
};

bmwX5.price = 55500;
bmwX5.model = "X5M";

console.log("price: ", bmwX5.price);

console.log(bmwX5);
bmwX5.beep();

// Клас

class Car {
  constructor(make, model, price) {
    // let this = {};
    this.make = make;
    this.model = model;
    this.price = price;
    // return this;
  }
  beep() {
    console.log(`${this.make} ${this.model} beep beep!`);
  }
}

const porschePanamera = new Car("Porsche", "Panamera", 200000);
console.log(porschePanamera);
porschePanamera.beep();

// JSON - JavaScript Object Notation
const jsonCar = JSON.stringify(porschePanamera);
console.log(jsonCar);

const car = JSON.parse(jsonCar);
console.log(car);
console.log(car.model);

// Спеціальний тип циклу для об'єктів
for (const key in car) {
  console.log(key, car[key]);
}

console.log(Object.entries(car));

// Поглиблені речі

// проблема з var
// function someFunc() {
//     for (let a = 42; a <= 43; a++) {
//         console.log(a);
//     }
//     console.log(a);
// }
// someFunc();

// Наслідування, модифікатори доступу
class EVCar extends Car {
  #batt;
  constructor(make, model, price, batt) {
    super(make, model, price);
    this.#batt = batt;
  }
  charge() {
    console.log(`${this.make} ${this.model} charging ${this.#batt}!`);
  }
  set batt(val) {
    if (val <= 100) {
        this.#batt = val;
    }
    console.log("Can't set battery more 100 kwt/h")
  }
  get batt() {
    return this.#batt;
  }
}

const teslaX = new EVCar("Tesla", "X", 100_000, 100);
teslaX.beep();
teslaX.batt = 180;
teslaX.charge();
console.log(teslaX);


// Копія об'єкта
// const teslaCopy = Object.assign({}, teslaX);
const teslaCopy = {...teslaX};
