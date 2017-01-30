$(document).ready(function(){

$("body").prepend("<div id='container'> </div>");
for (var i = 0; i <16; i++) {
	for (var j = 0; j <16; j++) {
	$("#container").prepend("<div class='butt'></div>");
	console.log("prepended");

}
}

});