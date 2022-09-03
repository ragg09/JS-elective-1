z = console.log;

function sum(){
	var i, total = 0;
	for(i = 0; i < arguments.length; i++){
		total += arguments[i];
	}

	return total;
}

z(sum(1,2,3,4,5,6,7,8,9));
z(sum(1,2,3,4,5));