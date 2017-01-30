$(document).ready(function(){

generateGrid();
colorSquares();

});
function generateGrid() {

	$("body").append("<div id='container'> </div>");
for (var i = 0; i <16; i++) {
	for (var j = 0; j <16; j++) {
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

		$(this).remove();
		console.log("cleared");


	})
};

