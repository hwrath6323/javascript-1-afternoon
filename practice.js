//////////////////PROBLEM 1////////////////////

//Create a function declaration called greeting that
//accepts name as its only parameter.
//greeting should return the string "Hello, "
//plus the value of the name parameter.

function greeting(name){
  return "Hello " + name;
}
var name = "Setsuna";
console.log(greeting(name));





//////////////////PROBLEM 2////////////////////

//Rewrite the function greeting as a function expression.
//Name it newGreeting.

var newGreeting = function greeting(){};





//////////////////PROBLEM 3////////////////////

//Rewrite the function greeting as an arrow function.
//Name it finalGreeting.

var name = "Steve Rogers";

finalGreeting = (name) => {return "Hello, " + name};

console.log(finalGreeting(name));





//////////////////PROBLEM 4////////////////////

//Create an array called groceries with the values
//"apples", "milk", "eggs", "bread"

var groceries = ["apples", "milk", "eggs", "bread"];

//Write a function called doubleCheck that takes in an array
//as a parameter.

//If the array does not contain "chocolate", add "chocolate".
//doubleCheck should return the array.

function doubleCheck(array){
  if(Array.prototype.includes("chocolate") == true){
    return array;
  }else if(Array.prototype.includes("chocolate") == false){
    array.push("chocolate");
    return array;
  }
}

var treats = ["doughnuts", "caramel", "chocolate"];
console.log(doubleCheck(groceries));
console.log(doubleCheck(treats));





//////////////////PROBLEM 5////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color: (a string), age (a number),
//and goodBoy (a boolean).

//...access the dog's name from the object and assign it to a
//variable called devMountainClassPet.

//Add a method to dog called bark.
//The value of bark should be a function that returns the string "Woof woof".

//Store the result of invoking the bark method in a variable called ruff.

var dog = {
  name: "Diablo",
  color: "black",
  age: 7,
  goodBoy: true,
  bark: function barkBark(){
    return "Woof woof"
  },
};

var devMountainClassPet = dog.name;
console.log(devMountainClassPet);
console.log(dog);

var ruff = dog.bark();

console.log(ruff);





//////////////////PROBLEM 6////////////////////

//Write a function called looper that takes in an array. looper should declare
//a variable called mySum and set it equal to 0. looper should then loop through
//the array and check each element.

//If the element is odd, or if the element is greater than or equal to 100, add the element
//to the mySum variable total.

//Return mySum.

function looper(array){
  var mySum = 0;
  for(i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0 || array[i] >= 100){
      mySum += array[i];
    }
  } return mySum;
};

var numbers = [100, 21, 30, 42, 57, 306];

console.log(looper(numbers));






//////////////////PROBLEM 7////////////////////

//Given the following function called math

function math(num1, num2, callback) {
  return callback(num1, num2);
}

//Write a function called add that takes in two parameters and
//returns the result of adding them together.

function add(num3, num4){
  return num3 + num4;
}

//Now invoke math, passing in the numbers 3 and 4, and your add function,
//storing the result in the variable mathSum.
var num3 = 3;
var num4 = 4;
var mathSum = math(num3, num4, add);
console.log(mathSum)





//////////////////PROBLEM 8////////////////////

//Write a function called invoker that takes in one paramter, a callback function.
//invoker should return the result of invoking the callback.

function sampleCallbackOne() {
  return "I am a callback function";
}

function sampleCallbackTwo() {
  return "I am also a callback function";
}

function invoker(cb){
  return cb;
}

var num1 = 1;
var num2 = 2;
add = (num1, num2) => {return num1 + num2};

console.log(invoker(add(num1, num2)));





//////////////////PROBLEM 9////////////////////
//There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck
//all within different scopes.
//Given the functions and variables above, edit the arrays
//below to contain only the appropriate variable names
//as strings.

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}


//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck"];

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["sailorDuck", "rubberDuck"];


//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["rubberDuck"];


//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["realDuck"];





//////////////////PROBLEM 10////////////////////

//Create a function called outerFn which returns an anonymous
//function which returns your name.

//Now save the result of invoking outerFn into a variable called innerFn.

//Now invoke innerFn and save the result to a variable called finalResult.


function outerFn(){
    return function(){
      return "Hannah"
  };
};

var innerFn = outerFn();
console.log(innerFn());

var finalResult = innerFn;
console.log(finalResult);


