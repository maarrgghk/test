$( document ).ready(function() {
  
  $( ".show-section" ).hide();
  $( "#show-incidence" ).show();
  
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
  
  $( "#show-incidence-btn" ).click(function() {
    $( ".show-section" ).hide();
    $(".subnav-item").removeClass("active");
    $( "#show-incidence" ).show();
    $( "#show-incidence-btn" ).addClass("active");
    $('#incidence-graph-left').highcharts().reflow();
    $('#incidence-graph-right').highcharts().reflow();
      event.preventDefault();
  });
  $( "#show-mortality-btn" ).click(function() {
    $( ".show-section" ).hide();
    $(".subnav-item").removeClass("active");
    $( "#show-mortality" ).show();
    $( "#show-mortality-btn" ).addClass("active");
    $('#mort-graph-left').highcharts().reflow();
    $('#mort-graph-right').highcharts().reflow();
      event.preventDefault();
  });
  $( "#show-survival-btn" ).click(function() {
    $( ".show-section" ).hide();
    $(".subnav-item").removeClass("active");
    $( "#show-survival" ).show();
    $( "#show-survival-btn" ).addClass("active");
    $('#survival-graph-left').highcharts().reflow();
    $('#survival-graph-right').highcharts().reflow();
      event.preventDefault();
  });
  $( "#show-experience-btn" ).click(function() {
    $( ".show-section" ).hide();
    $(".subnav-item").removeClass("active");
    $( "#show-experience" ).show();
    $( "#show-experience-btn" ).addClass("active");
    $('#experience-graph-left').highcharts().reflow();
    $('#experience-graph-right').highcharts().reflow();
      event.preventDefault();
  });
  
  $( "#show-quality-btn" ).click(function() {
    $( ".show-section" ).hide();
    $(".subnav-item").removeClass("active");
    $( "#show-quality" ).show();
    $( "#show-quality-btn" ).addClass("active");
    $('#quality-graph-left-1').highcharts().reflow();
    $('#quality-graph-left-2').highcharts().reflow();
    $('#quality-graph-right-1').highcharts().reflow();
    $('#quality-graph-right-2').highcharts().reflow();
      event.preventDefault();
  });
  
  
});