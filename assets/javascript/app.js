$(document).ready(function(){
    $(".trivia").hide();
    $("#time").hide();   


$("button").on("click",function(){
    var i;
    for(i=1; i < 11; i++) {
        // show trivia question and timer
        $("#trivia"+i).show();
        $("#time").show();
        $("button").hide();
        
        // set counter to 30
        var number = 30;
        var intervalId;
        
        // define run timer function
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
          };
        
        // define decrement function
          function decrement() {
            //  Decrease number by one.
            number--;

            //  Show the number in the #time tag.
            $("#time").html("<h2>" + number + "</h2>");

            //  Once number hits zero...
            if (number === 0) {

                //  ...run the stop function.
                stop();

                //  Alert the user that time is up.
                alert("Time's Up!");
            };
        };

        //  The stop function
        function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
      };
        // Execute run function
        run ();
}});
});