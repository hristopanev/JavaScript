"use strict";

function solve () {
   const x = 23;

};

let obj = {
   prop: 1,
   prop2: 'string',
   prop3: function() {

   }
}

obj.prop;

function createPerson(firstName, lastName) {
   firstName = firstName || 'John';
   lastName = lastName || 'Doe';

   let person = {
      fullName: firstName + ' ' + lastName
   };
   
   return person;
}

// createPerson('', '')

let num = 1;
console.log(typeof num)

function solve(num1, num2, op) {
   const cases = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '%': (a, b) => a % b,
      '**': (a, b) => a ** b,
   };
   console.log(cases[op](num1, num2));
}

solve(2, 3, '+');
