// //global scope
// z = console.log;
// var global_var = 1;

// function testScope(){
// 	z(global_var);
// }

// testScope();

// z("\n```````````````````````````\n");

// //global scope over write
// var a = 1;

// function testScope2(){
// 	a = 2; 
// 	z(a);
// }

// z("original: " + a);
// testScope2();
// z("over written: " + a);


//closures 
// var outer = 'I am outer'; //Define a value in global scope
// function outerFn() { //Declare a a function in global scope
// console.log(outer);
// }
// outerFn(); //prints - I am outer

var outer = 'Outer'; //Variable declared in global scope
var copy;
function outerFn(){ //Function declared in global scope
var inner = 'Inner'; //Variable has function scope only, can not be
//accessed from outside
function innerFn(){ //Inner function within Outer function,
//both global context and outer
//context are available hence can access
//'outer' and 'inner'
console.log(outer);
console.log(inner);
}
copy=innerFn; //Store reference to inner function,
//because 'copy' itself is declared
//in global context, it will be available
//outside also
}
outerFn();
copy(); //Cant invoke innerFn() directly but can invoke via a
//variable declared in global scope
