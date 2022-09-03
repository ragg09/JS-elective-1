var z = console.log;
var _ = require('underscore');
// function print(n){
// console.log(n);
// }
// _.each([1, 2, 3], print);

console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
//[3,6,9]

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){
return num % 2 == 0; });
console.log(evens);

z(_.range(10));

z(_.range(1,11));

z(_.range(0, 30, 5));

z(_.contains([1,2,3], 3));