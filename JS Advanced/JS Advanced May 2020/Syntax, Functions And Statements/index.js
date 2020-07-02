"use strict";

function solve () {
   const x = 23;

};

var obj = {
   prop: 1,
   prop2: 'string',
   prop3: function() {

   }
}

obj.prop;

function createPerson(firstName, lastName) {
   firstName = firstName || 'John';
   lastName = lastName || 'Doe';

   var person = {
      fullName: firstName + ' ' + lastName
   };
   
   return person;
}

// createPerson('', '')

let num = 1;
console.log(typeof num)