//decalring variable

var a;
var b = 0;

console.log(b); //0
console.log(a); //unidentified
console.log(a+b); // NaN

console.log("\n\n~~ the + operator ~~");

var c = "foo";
c =+ c;
console.log(c);
console.log(typeof c + "\n");

var zero = "";
zero =+ zero;
console.log(zero);
console.log(typeof zero);
