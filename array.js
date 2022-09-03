z = console.log;

//3 way of deaclaring array but they are all the same
var arr = new Array(1,2,3,4);
var arr2 = Array(1,2,3,4);
var arr3 = [1,2,3,4];
//z(arr);

var days = []
days[0] = 'monday';
days[1] = 'tuesday';
//z(days);

var anytype = ["string", 192, false, true, null, undefined];
//z(anytype);

//foreach printing of array
var colors = ["red", "blue", "green"];
colors.forEach(function(color){
	z(color);
})

//join method, printing array into a string with prefferede delimiter
var join = colors.join(" ~ ");
z(join);


// //pop method
// z("before using pop");
// z(colors);
// var pop = colors.pop();
// z(pop);
// z("after using pop" );
// z(colors);

// //push method
// z("before using push");
// z(colors);
// var push = colors.push("white");
// z(push);
// z("after using push" );
// z(colors);

// //shift method
// z("before using shift");
// z(colors);
// var shift = colors.shift();
// z(shift);
// z("after using shift" );
// z(colors);

//unshift method
z("before using unshift");
z(colors);
var unshift = colors.unshift("pink", "purple");
z(unshift);
z("after using unshift" );
z(colors);






