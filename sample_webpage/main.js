$(document).ready(function() {

$("a").attr("href", "http://www.codefactory.wien");

$("code").css("color", "red");

$("ol > li").css("background-color", "#2a7b90");

$("textarea").val("Express your opinion");

$("img").attr("src", "https://upload.wikimedia.org/wikipedia/de/thumb/5/50/DFB-Logo_1945.svg/100px-DFB-Logo_1945.svg.png");

$("blockquote").css({"background-color":"orange", "font-style":"italic"});

$("#logo").css("color", "black");
$(".gray").css("color", "white");

$(".date").remove();

$("ul.sidemenu:first").append("<li><a href=#>New Templates</a></li><li><a href=#>Order Template</a></li><li><a href=#>Contact us</a></li>");

var newQuote = "I want a programming language in which I need only to say what I wish, and done, give him a lollipop.";

$("p#quote").text(newQuote);

});