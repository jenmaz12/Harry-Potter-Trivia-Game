$(window).ready(function(){
    $(".trivia").hide();
    $("#time").hide();   
});

$("button").on("click",function(){
    var i;
    for(i=0; i < 11; i++) {
        $("#trivia"+i).show();
        
    }
})