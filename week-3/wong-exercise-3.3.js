const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 3.3'));
/*
============================================
; Title: Exercise 3.3
; Author: Devan Wong
; Date: 22 August 2020
; Description: The Singleton Pattern 
;===========================================
*/ 
// start program
var DatabaseSingleton = (function(){
    var instance;
    function createInstance(){
        var postgresDatabase= new Object("Database instance initiliazed");
        return postgresDatabase;
    };
    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

//our two instantiated objects that we created are the calls to the function both returned a signle instance of the obj
function databaseSingletonTest(){
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    console.log("One database instance? %s ", (oracle === postgres));
};

databaseSingletonTest();
// end program



// function databaseInit() {
//     var databaseInstance1 = DatabaseSingleton.getInstance();
//     var databaseInstance2 = DatabaseSingleton.getInstance();
//     console.log("One database instance? " + (databaseInstance1 === databaseInstance2));
// };
//databaseInit();