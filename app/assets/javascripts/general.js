$( document ).ready(function() {
    
  console.log("poop")
  
  $( "#choose-ccg" ).click(function() {
    $( "#choose-provider" ).removeClass("active");
    $( "#provider-dropdown" ).removeClass("active");
    $( "#choose-ccg" ).toggleClass("active");
    $( "#ccg-dropdown" ).toggleClass("active");
      event.preventDefault();
  });
  
  $( "#choose-provider" ).click(function() {
    $( "#choose-ccg" ).removeClass("active");
    $( "#ccg-dropdown" ).removeClass("active");
    $( "#choose-provider" ).toggleClass("active");
    $( "#provider-dropdown" ).toggleClass("active");
      event.preventDefault();
  });
  
});