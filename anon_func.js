z = console.log;

// function eventHandler(event){
// 	event();
// }

// eventHandler(function(){
// 	z("I AM THE FUNCTION");
// })

// z("\n``````````````````\n");

// var shape;
// //z(typeof shape);
// var shape_name = 'SQUARE';

// if(shape_name === "SQUARE") {
// 	shape = function() {
// 		return "drawing square";
// 	}
// }
// else 
// {
// 	shape = function() {
// 		return "drawing not a square";
// 	}
// }
// z(shape());
// //z(typeof shape);

var santa = {
	say: function(){
		z("ho ho ho");
	},
	age: function(){
		z("16");
	}
}

santa.say();
santa.age();
