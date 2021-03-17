$(document).ready(function(){
  $(".clickable").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle(); 
  });
});

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

// So, what's the difference between a class and an ID, except that we use a . to select a class and a # to select an ID? Nothing, really, except that you can only use an ID once on a page, and you can use a class as many times as you want. But by using an ID, you can be clear that you're referring to one particular thing, rather than potentially referring to several.