// console.log(true && true); // true AND true returns true
// console.log(true && false);// true AND false returns false
// console.log(false && true);// false AND true returns false
// console.log("Foo" && "Bar");// Foo(true) AND Bar(true) returns Bar
// console.log(false && "Foo");// false && Foo(true) returns false
// console.log("Foo" && false);// Foo(true) && false returns false
// console.log(false && (1 == 2));// false && false(1==2) returns false
// console.log(false && false); // false ang false is false


// console.log("\n\nLogical Boolean");
// console.log (0 && "Foo"); //First operand is falsy - return it
// console.log ("Foo" && "Bar"); //First operand is truthy, return the second operand
// console.log (0 || "Foo"); //First operand is falsy - return second operand
// console.log ("Foo" || "Bar"); //First operand is truthy, return it
// console.log (0 || false); //First operand is falsy, return second operand

// console.log("\n\nLogical OR");
// function greeting(name){
// 	names = name || "John";
// 	//console.log(name);
// 	console.log("Hello " + names);
// }
// greeting("Johnson"); // alerts "Hi Johnson";
// greeting(); //alerts "Hello John"

console.log("\n\nLogical NOT");
//If the operand is an object, false is returned.
var s = new String("string");
console.log(!s);
//If the operand is the number 0, true is returned.
var t = 0;
console.log(!t);
//If the operand is any number other than 0, false is returned.
var x = 11;
console.log(!x);
//If operand is null or NaN, true is returned
var y =null;
var z = NaN;
console.log(!y); //true
console.log(!z);
//If operand is undefined, you get true
var foo;
console.log(!foo);