$( document ).ready(function() {
    
  console.log("poop")
  
  $( "#choose-ccg" ).click(function() {
    $( "#choose-trust" ).removeClass("active");
    $( "#choose-constit" ).removeClass("active");
    $( "#trust-dropdown" ).removeClass("active");
    $( "#constit-dropdown" ).removeClass("active");
    $( "#choose-ccg" ).toggleClass("active");
    $( "#ccg-dropdown" ).toggleClass("active");
      event.preventDefault();
  });
  
  $( "#choose-trust" ).click(function() {
    $( "#choose-ccg" ).removeClass("active");
    $( "#choose-constit" ).removeClass("active");
    $( "#ccg-dropdown" ).removeClass("active");
    $( "#constit-dropdown" ).removeClass("active");
    $( "#choose-trust" ).toggleClass("active");
    $( "#trust-dropdown" ).toggleClass("active");
      event.preventDefault();
  });
  
  $( "#choose-constit" ).click(function() {
    $( "#choose-ccg" ).removeClass("active");
    $( "#choose-trust" ).removeClass("active");
    $( "#ccg-dropdown" ).removeClass("active");
    $( "#trust-dropdown" ).removeClass("active");
    $( "#choose-constit" ).toggleClass("active");
    $( "#constit-dropdown" ).toggleClass("active");
      event.preventDefault();
  });
  
});