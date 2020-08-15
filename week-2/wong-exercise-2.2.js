const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 2.2'));
/*
============================================
; Title: Exercise 2.2
; Author: Devan Wong
; Date: 9 August 2020
; Description: Prototypes 
;===========================================
*/ 


// start program

//object literal of a person
var person = {
  getAge: function(){
    return this.age;
  }
}

//new object literal passing 1st obj literal
var devan =  Object.create(person, {
  "age": {
    "value": 29
  },
  fullname: {
    "value": "Devan Wong"
  }
});

devan.getAge();
//output
console.log("The person's full name is: '%s'", devan.fullname);
console.log("The person's agee is: '%s'", devan.age);
// end program

