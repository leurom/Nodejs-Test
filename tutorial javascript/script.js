//Javascript is a dynamic language
//Data Types are automatically converted when executed
//Object literal
const person = {
    'firstname': 'Roman',
    'lastname': 'Leu',
    'age': 25
}

console.log(person);
console.log(person.firstname);

//Array
const newArray = [1,2,3,4];
console.log(newArray[0]);

//Operators
//Assignment Operator
let x=10;
let y=8;
//Arithmetic Operator
let z=x+y;

//Compare Operator
console.log(x==y);
console.log(x===y); // Also compares datatype

const isEven = 10%2===0 ? true : false //if condition is true it assigns true otherwise false. Any values can be assigned instead of true or false
console.log(isEven);

//Type conversions
//implicit(automatically)
console.log(2+'3') //gives a string "23"
console.log('2'+'4') //gives a numeric value 6

//explicit(manually)
console.log(Number("5"));
console.log(parseInt("5"));
console.log(parseFloat("5.2"));
console.log(String(500));
console.log((500).toString());
console.log(Boolen(10)); //null undefined 0 '' NaN => returns false




