// Write a JavaScript function that takes an array of strings and returns a new array with the length of each string.
function getLengthOfStrings(strings){
    return strings.map(str=> str.length);
}
const strings = ["duck", "hawk", "eagle","owl"];
console.log(getLengthOfStrings(strings));

// Given an array of numbers, write a function that filters out and returns only the even numbers.
function filterEvenNumbers(numbers){
    return numbers.filter(num => num%2===0);
}
const numbers = [11, 22, 34, 43, 51, 67,54,]
console.log(filterEvenNumbers(numbers));

// Create a function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75.
function getStudentsScore(students){
    return students
    .filter(student => student.score >75)
    .map(student => student.name);
}
const students = [
    { name: "Mary", score: 83 },
    { name: "John", score: 72 },
    { name: "Catherine", score: 87 }
];
console.log(getStudentsScore(students));

// Write a function that accepts an array of numbers and returns a new array with each number squared using the map() method.
function getSquare(numbers){
    return numbers.map(num => num**2)
}
const nums = [9, 5, 11, 10, 8];
console.log(getSquare(numbers)); 

// Write a JavaScript function that takes an array of mixed data types and returns a new array containing only the string elements, all converted to uppercase
function getStrings(array){
    return array
    .filter(item => typeof item === "string") 
    .map(str => str.toUpperCase())
}
const array = ["Neema", 20, "October", true, "Libra"];
console.log(getStrings(array)); 
