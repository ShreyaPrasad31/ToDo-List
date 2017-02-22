//check off todos
//.on() has potential for all future elements added to ul 
$("ul").on("click" , "li", function(){
   if($(this).css("color") === "rgb(128, 128, 128)"){
   	$(this).css({
   	color:"black",
   	textDecoration: "none"
   });
   }
   else{
   $(this).css({
   	color: "gray",
   	textDecoration: "line-through"
   });
   }
});
//click on x to delete todo
$("ul").on("click","span", function(event){
  //removes li 
  $(this).parent().fadeOut(500,function(){
  	//removes parent element of span
  	$(this).remove();
  });
  event.stopPropagation();
  //doesnt let the effect go to li->ul->div->body
});
$("input[type='text']").keypress(function(event){
   if(event.which ===13){
   	//Taking new todo from input
   	var todoText = $(this).val();
   	//makes the text input empty
   	$(this).val("");
   	//Creating a new li and adding it to ul
   	
   	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});
$(".fa-sign-out").click(function(){
	$("input[type='text'").fadeToggle()
});
