// Define a class named "car"
class car {
  start() {
    console.log("The car is starting...");
  }
  constructor(brand) {
    this.brand = brand;
  }
  displayBrand() {
    console.log(`The brand of the car is: ${this.brand}`);
  }
}
const myCar = new car("Toyota");
myCar.displayBrand();

// using the extends keyword to create a subclass named "electricCar" that inherits from the "car " class
class electricCar extends car {
  //example of an instance method in the subclass
  drive() {
    console.log("The electric car is driving...");
  }
  constructor(brand, batteryCapacity) {
    super(brand); // calls the constructor of the parent class (car)
    this.batteryCapacity = batteryCapacity;
  }

  displayBatteryCapacity() {
    console.log(
      `The battery capacity of the electric car is: ${this.batteryCapacity}`,
    );
  }
}

const myElectricCar = new electricCar("Tesla", "100 kWh");
myElectricCar.displayBrand(); // inherited method from the parent class
myElectricCar.displayBatteryCapacity(); // method from the subclass

//adding Methods to the classes(instance and static methods)
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  static compare(car1, car2) {
    return car1.brand === car2.brand;
  }
}

const car1 = new Car("Toyota");
const car2 = new Car("Honda");
console.log(Car.compare(car1, car2)); // false
//calling the instance method
myCar.start(); // The car is starting...
myElectricCar.drive(); // The electric car is driving...

//Error Handling try, catch and finally

try {
  // Code that may throw an error
  let result = riskyOperation(); // This will not throw an error
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.name + ": " + error.message);
} finally {
  console.log("This will always execute.");
}

//Promise example
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Change this to false to see the rejection case

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});
 myPromise
  .then((message) => {
    console.log(message); // Operation successful!
    })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

  //HANDS ON EXERCISE: 
  