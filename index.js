//console.log(`Hello`);
//console.log(`i like pizza!`);

//window.alert(`This is an alert`)
//window.alert(`i like pizza`)
//document.getElementById(`myH1`).textContent = `Hello`;
//document.getElementById(`myP`).textContent = `i like pizza`;

//this is a comment

/*
this is a comment
*/
/************************************************/
/* A Variable is a container that stores a value. 
behaves as if were the value it contains :
1. declaration
2. assignment
*/
//let x;
//x = 100;
//console.log(x)

//let age = 25;
//let price = 10.99;
//let gpa = 2.1;

//let firstName = "Bro";
//let favoriteFood = "pizza";
//let email = "bro123@gmail.com"

//console.log(typeof firstName);
//console.log(`your name is ${firstName}`)
//console.log(`your emails is ${email}`)

//console.log(`you are ${age} years old`);
//console.log(`the price is $${price}`);
//console.log(`Your GPA is: ${gpa}`);

//let online = true;
//let forSale =true;

//console.log(`Bro is online: ${online}`);
//console.log(`is the car for sale: ${forSale}`)

/*
//let fullName =  "Bro code";
//let age = 25;
//let isStudent = "false";
*/

//document.getElementById(`p1`).textContent = `your name is ${fullName}`;
//document.getElementById(`p2`).textContent = `you are ${age} years old`;
//document.getElementById(`p3`).textContent = `Enrolled: ${isStudent}`;

/************************************************************ */
/* 
//Arithmetic operators = operands (values, variables, etc)
                        operators ( + - * /)
                        example: 11= x + 5;
*/

/*
let students = 31;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2  // ** is to the power, exponents operators
//students = students % 2; //the % gives the remainder so students/2 gives the reminder 1
//let extraStudents = students % 3;


/* augumented assignment operators*/
//students += 1; // to increse students by a number
//students -=1;
//students *=2
//students /=2
//students **=2;
//students %=2;

//students++; //variable increment
//students--; //variable increment
//console.log(extraStudents)
//console.log(students)

/************************************************************** */
/* operator precedence
1. parenthesis ()
2. exponents
3. multiplication & division & modulo
4. addition & subtraction
*/

//let result = 1 + 2 * 3 + 4 ** 2;

//console.log(result);

/**************************************************************** */
/* How to accept user input

1. Easy Way = window prompt
2. Professional Way = HTML textbox
*/

//1. easy way
//let username = window.prompt("what is your username")
//console.log(username);

//2. Professional way
//let username;
//document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById(`myH1`).textContent = `Hello ${username}`
//}

/************************************************************ */
/*
//type conversion = change the datatype of a value to another
//                 (strings, numbers, booleans)
//let age = window.prompt(`how old are you`);
//age= Number(age)//this coverts the string collected data to numbers int
//age+=1;
//console.log(age, typeof age)


let x = "pizza"
let y = 'pizza'
let z = 'pizza'

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

*/

/********************************************************* */
//reference to no 20-26 index.html
// const = is a container for a variable that cannot be changed once you assign a number to them

//const pi = 3.14159  //the const makes it imposible to change the variable pi in the future intentionally or by mistake
//let radius;
//let circumference

//radius = window.prompt(`enter the radius of a circle`)//this is for the window prompt the one that drops down
//radius = Number(radius);


//document.getElementById(`mySubmit`).onclick = function(){
//radius = document.getElementById(`userRadius`).value;
//radius = Number(radius);
//circumference = 2 * pi * radius;

//console.log(circumference)

//document.getElementById("myh3").textContent = circumference
//}


/*********************************************************** */
//counter program 
//reference to no 28-45
/*
const decreaseBtn = document.getElementById(`decreaseBtn`);
const resetBtn = document.getElementById(`resetBtn`);
const increaseBtn = document.getElementById(`increaseBtn`);
const countLabel = document.getElementById(`countLabel`);
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}

*/

/****************************************************************** */
// Math  is a built-in object that provides a collection of properties and methods

//let x = 3;
//let y = 2;
//let z = 5;

//z = Math.round(x);//  this rounds the digit
//z = Math.ceil(x);// this round up the digit
//z = Math.floor(x);// this round down the digit
//z = Math.trunc(x);// this truncates the digit
//z = Math.pow(x, y);// the take it to the power
//z = Math.round(x);// the square root
//z = Math.log(x);// find the natural log of a number
//z = Math.sin(x);// to find the sin
//z = Math.cos(x);// find the cosine
//z = Math.tan(x);// find the tangent
//z = Math.abs(x);//find the absolute value
//z = Math.sign(x);// find the sign of a number
//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z);

//console.log(max);
//console.log(min);


/******************************************************************* */
// RANDOM NUMBER GENERATOR, Math.random generates numbers between 0-1, so when you add * 6 it does 0-5
/*
const min = 50;
const max = 100;
//let randomNum = Math.floor(Math.random() * 6) + 1;// without the const-Math.floor round down the number, while Math.random generates a random number finally the * 6 generates a radom number between 0-6, while + 1 gives random numbers from 1-6
//when const is added
let randomNum = Math.floor(Math.random() * (max - min)) + min;//this gives a random number from min 50 to max 100

console.log(randomNum);
*/
const myButton = document.getElementById('myButton');
const highBtn = document.getElementById('highBtn');
const midBtn = document.getElementById('midBtn');
const lowBtn = document.getElementById('lowBtn');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const resultDisplay = document.getElementById('result'); // Add this in HTML

const min = 1;
const max = 6;
let userChoice = null; // Will store 'high', 'mid', or 'low'

// Event listeners for button selections
highBtn.addEventListener('click', () => {
    userChoice = 'high';
    updateButtonStyles();
});

midBtn.addEventListener('click', () => {
    userChoice = 'mid';
    updateButtonStyles();
});

lowBtn.addEventListener('click', () => {
    userChoice = 'low';
    updateButtonStyles();
});

// Roll the dice and check win condition
myButton.onclick = function() {
    if (!userChoice) {
        alert("Please select High, Mid, or Low first!");
        return;
    }

    // Roll three dice
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

    // Calculate total
    const total = randomNum1 + randomNum2 + randomNum3;
    
    // Determine the correct range
    let correctRange;
    if (total >= 15 && total <= 18) correctRange = 'high';
    else if (total >= 10 && total <= 14) correctRange = 'mid';
    else correctRange = 'low'; // (3-9)

    // Check if the user guessed correctly
    if (userChoice === correctRange) {
        resultDisplay.textContent = `Total: ${total} - You Win! 🎉`;
    } else {
        resultDisplay.textContent = `Total: ${total} - You Lose! 😢 (Correct: ${correctRange})`;
    }
    
    // Reset for the next round
    userChoice = null;
    updateButtonStyles(); // Deselect all buttons
};

// Helper function to update button styles (selected state)
function updateButtonStyles() {
    highBtn.classList.toggle('selected', userChoice === 'high');
    midBtn.classList.toggle('selected', userChoice === 'mid');
    lowBtn.classList.toggle('selected', userChoice === 'low');
}