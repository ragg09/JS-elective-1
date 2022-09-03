z = console.log;

var author = {
	firstname : "Douglas",
	lastname : "Crockford",
	book : {
		title:"JavaScript- The Good Parts",
		pages:"172"
	}
};

z(author["firstname"]);
z(author.lastname);
z(author.book.title);
z(author.book.age || "no age found");
z(author.book.pages);
author.book.pages = 69;
z(author.book.pages);

var meetingRoom = {};
meetingRoom.book = function(roomId){
	console.log("booked meeting room -"+roomId);
}
meetingRoom.book("VL"); 