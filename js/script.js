//task 1
const world = 'world';
const hello = 'Hello'
const echo = `${hello} ${world}`
console.log(echo);
//task 2
const multiply = (x = '1', y = '1') => x * y;
console.log(multiply(5));

//task 3

const average = (...array) => array.reduce((a, b) => a + b) / array.length;
console.log(average(1, 2, 3));

//task 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const average2 = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average2(grades));


//task 5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = array;
console.log(firstname, lastname);