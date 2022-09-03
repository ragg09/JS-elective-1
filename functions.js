//normal function
function add(a,b){
	return a+b;
}
var c = add(2,3);
console.log(c);

//function as a variable

var sub = function(a,b){
	return a-b;
}
//var s = sub(5,5);
console.log(sub(5,5));

// /function as a parameter to another function
function changeCase(val) {
	return val.toUpperCase();
}

function demofunc(a, passfunction) {
	console.log(passfunction(a));
}

demofunc("pass me", changeCase);

//function as data, same as using variable as function
var z = console.log;
z("I am a console dot log function");

//pass function in toher function as parameter
var validateDataForAge = function(data) {
	person = data();
	console.log(person);
	if (person.age <1 || person.age > 99){
		return true;
	}
	else{
		return false;
	}
};

var errorHandlerForAge = function(error) {
	console.log("Error while processing age");
};

function parseRequest(data,validateData,errorHandler) {
	var error = validateData(data);
	if (!error) {
		console.log("no errors");
	} 
	else{
		errorHandler();
	}
}

var generateDataForScientist = function() {
	return {
		name: "Albert Einstein",
		age : Math.floor(Math.random() * (100 - 1)) + 1,
	};
};

var generateDataForComposer = function() {
	return {
		name: "J S Bach",
		age : Math.floor(Math.random() * (100 - 1)) + 1,
	};
};

var generateDataForError = function() {
	return {
		name: "Mr Error",
		age : 101,
	};
};

parseRequest(generateDataForScientist, validateDataForAge, errorHandlerForAge);
parseRequest(generateDataForComposer, validateDataForAge, errorHandlerForAge);
parseRequest(generateDataForError, validateDataForAge, errorHandlerForAge);