
//Regular function that can be overriden 
myName = function(){
    console.log("My name is Devan");
}
myName();

//function using nameSpace with JQUERY
//declare the namespace outside enclosing function to make it assessable to the outside. 
var MYNAMESPACE= {};

(function($){
    MYNAMESPACE.SUBNAME = {
        myName: function(){
            console.log("My Name is Devan")
        }
    }
})();

MYNAMESPACE.SUBNAME.myName();