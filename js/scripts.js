$(document).ready(function(){
  $(".clickable").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle(); 
  });
});


// So, what's the difference between a class and an ID, except that we use a . to select a class and a # to select an ID? Nothing, really, except that you can only use an ID once on a page, and you can use a class as many times as you want. But by using an ID, you can be clear that you're referring to one particular thing, rather than potentially referring to several.