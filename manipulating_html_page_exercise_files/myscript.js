

$(document).ready(function() {

$("form").submit(function(e) {

	e.preventDefault();

	

});

//$("form").remove(); 


for(var i=0; i< 5; i++) {
	$("form#myform").after("<div id=newdiv>neue Div</div>");
	$("#newdiv").addClass("box");
}


$("input[name=msg]").val("Search for..."); 

$("a").attr("href", "http://www.codefactory.wien"); 




}); 






