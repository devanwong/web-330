const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 3.2'));
/*
============================================
; Title: Exercise 3.2
; Author: Devan Wong
; Date: 22 August 2020
; Description: The Factory Pattern 
;===========================================
*/ 
// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

//database class constructors 
function Oracle(properties){
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:8080";
    this.version = properties.version || 1;
   }
//database class constructors
function Informix(properties){
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:8000";
}


function DatabaseFactory() {};

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    };
    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    };
    if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    };
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    };
    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: "MySQL",
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin-2",
    password: "SuperSecret"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "123456"
});

//OUTPUT
// console.log(oracle instanceof Oracle);
// console.log(informix instanceof Informix);

console.log(oracle);
console.log(informix);

// end program

