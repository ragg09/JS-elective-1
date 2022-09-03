z = console.log;

var person = {
	name: 'Rene Angelo',
	age: 66,
	greet: function(){
		z(this.name);
	}
}

person.greet();
z(typeof person);