// check off specific todos by turing them grey and strike through
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	//if li is grey turn it black
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 	color: "black", 
	// 	textDecoration: "none"});
	// }
	// //else turn text grey
	// else {$(this).css({
	// 	color: "grey", 
	// 	textDecoration: "line-through"});

	// }
})

// click on x to delete event
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
	// grabs the text from input
	var tDo = $(this).val();
	$(this).val("");
	// clear the input
	// create a new li 
	$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+tDo+"</li>");
	}
})
$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
})