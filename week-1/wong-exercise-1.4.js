const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 1.4'));
/*
============================================
; Title: Exercise 1.4
; Author: Devan Wong
; Date: 9 August 2020
; Description: Duck Typing, A.K.A. "Interfaces"
;===========================================
*/ 

// Car class with one parameter (model)
function Car(model) {
    this.model = model;
}
//  prototype method to each class called “start” “ +  added to the racetrack!
Car.prototype.start = function(){
    console.log("Car added to the racetrack!");
}
//  Truck class with two parameters (model, year)
function Truck(model, year){
    this.model = model;
    this.year = year;
}
//  prototype method to each class called “start” “ +  added to the racetrack!
Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
}
// Jeep class with three parameters (model, year, color)
function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}
//  prototype method to each class called “start” “ +  added to the racetrack!
Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");
}

// three (3) vehicle classes  
var car = new Car("Lexus IS");
var truck = new Truck ("Tacoma", 2018);
var jeep = new Jeep ("Wrangler", 2020, "Red");

// empty racetrack array
let racetrack = [];

// driveIt function with one parameter (vehicle) + push the vehicle to the racetrack array
function driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}

// OUTPUT
// pass them through the driveIt() function
driveIt(car);
driveIt(truck);
driveIt(jeep);
//Iterate over the racetrack array and output the results
console.log(" -- The following vehicles have been added to the racetrack --");
for(let i = 0; i < racetrack.length; i++){
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model)
}