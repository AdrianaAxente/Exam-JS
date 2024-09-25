// First exercise
let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits[2]);

// Second exercise
let fruitsString = fruits.join(" || ");
console.log(fruitsString);

// Third exercise 
fruits.splice(3, 0, "kiwi")
console.log(fruits);

// Fourth exercise
let myArr = [1, 2, 3, 4, 5, 6, 7, 9, 9, 10];
let evenNumbers = myArr.filter(number => number % 2 === 0);
console.log(evenNumbers);

// Fifth exercise
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["blue", true, "0"];
let arr3 = [6, "cat", false];
let combinedArray = arr1.concat(arr2, arr3);
console.log(combinedArray);

// Sixth exercise 
// Define the object
let car = {
    brand: "Toyota",
    color: "Red",
    year: 2020
};

// Access the Properties
console.log(car.brand);
console.log(car.color);

// Override the Properties
car.color = "Blue";
car.year = 2021;
console.log(car.color);
console.log(car.year);

// Seventh exercise
let car = {
    brand: "Toyota",
    color: "Red",
    year: 2020,
    whatYear: function() {
        console.log(`The car is frpm: ${this.year}`);
    }
};
car.whatYear();

// Eighth exercise
let anotherCar = Object.create(car);

// Ninth exercise
delete car.color;

// Tenth exercise
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
