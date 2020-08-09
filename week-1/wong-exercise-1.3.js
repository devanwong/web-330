const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 1.3'));
/*
============================================
; Title: Exercise 1.3
; Author: Devan Wong
; Date: 9 August 2020
; Description: Class Refresher
;===========================================
*/ 

// start program
//  FUNCTION CLASS
// create a cell phone object with the following properties / methods: Manufacturer, Model, Color, Price, getPrice(), getModel(), getDetails()
function CellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    // will return the cell phones price.
    this.getPrice = function(){
        return this.price
    };
    // will return the cell phones model
    this.getModel = function(){
        return this.model
    };
    //must call the getPrice() and getModel() functions and output the Manufacturer, Model, Color, and Price 
    this.getDetails = function(){
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice()
    };
}
// new cellphone object 
var cellPhone = new CellPhone("Apple", "iPhone X", "Red", "$600");

//  -- DISPLAYING CELL PHONE DETAILS --
console.log(cellPhone.getDetails());

// end program