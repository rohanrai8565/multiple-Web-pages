$(document).ready(function(){
  $("nav a").on("click", function(){
    $("nav a").removeClass("active");
    $(this).addClass("active");
  });

  $(".bio p").hover(function(){
    $(this).css("color", "#0077cc");
  }, function(){
    $(this).css("color", "#333");
  });
});