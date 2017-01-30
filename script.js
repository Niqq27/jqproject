$(document).ready(function(){

generateGrid(64);
colorSquares();

$("#clear").click(function(){

	clear();


})

});
function generateGrid(size) {

	$("body").append("<div id='container'> </div>");
for (var i = 0; i <size; i++) {
	for (var j = 0; j <size; j++) {
	$("#container").prepend("<div class='butt'></div>");
	console.log("prepended");

}
}

};

function colorSquares(){

	$(".butt").mouseenter(function(){
		$(this).css("background-color", "blue");
	})

};

function clear(){

	console.log("clear called");

	$(".butt").each(function(){

		$(this).css("background-color", "green");
		console.log("cleared");
		var size = prompt("What size do you want bitch?");
		generateGrid(size);



	})
};

