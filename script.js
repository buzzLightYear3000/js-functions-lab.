/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
const isAdult = (x) => {
    if (x >= 18) {
        return 'Adult';
    }  else {
        return 'Minor'
    }
}


console.log('Adult:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (a) => {
    if(a === a||e||i||o||u) {
        return 'true'
    } else {
        return 'false'
    }
    }


console.log('true', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
    return `${name}@${domain}`
}


console.log('johnsmith@example.com', generateEmail("johnsmith", "example.com"));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/



const greetUser = (name, tod) => {
    return `Good ${tod}, ${name}!`
}


console.log(' Good morning, Sam!', greetUser("Sam", "morning"));
/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(x, y, z){
    const largestNum = Math.max(x, y, z);
    return `${largestNum}`
}

console.log('10', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (billa, tipperc) => {
    let percentage = tipperc / 100
    const amount = billa * percentage;
    return `${amount}`
}

console.log('10', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temp, scale){
    let celconv = (temp * (9/5)) + 32
    let farconv = (temp - 32) * (5/9)
    if(scale = "C"){
        return `${celconv}`
    }else{
        return `${farconvconv}`
    }
}


console.log(89.6, convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (x, y, operator) => {
    let addition = x + y;
    let subtration = x - y;
    let multiplication = x * y;
    let division = x / y;
    switch(operator){
        case 'add':
            console.log(`${addition}`);
            break;
        case 'subtrat':
            console.log(`${subtration}`);
            break;
        case 'multiply':
            console.log(`${multiplication}`);
            break;
        case 'divide':
            console.log(`${division}`);
            break;

    }
}


console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));





