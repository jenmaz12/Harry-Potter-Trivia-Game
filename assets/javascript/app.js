$(document).ready(function(){
    $(".trivia").hide();
    $("#time").hide();
    $("#alert").hide();   


$("button").on("click",function(){
    var count = 0;
        // show trivia question and timer
    function displayQuestion() {
        $("#trivia"+count).hide();
        $("#alert").hide();
        count++;
        $("#trivia"+count).show();
        $("#time").html(30);
        $("#time").show();
        number = 30;
        run();
    }
        displayQuestion ();
        
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
                $("#alert").html("Time's Up!");
                $("#alert").show();
                // hide incorrect answers
                $(".incorrect"+count).hide();
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

        $("#correct"+count).on("click", function(){
            // show correct alert
            $("#alert").html("That's Correct!");
            $("#alert").show();
            // hide incorrect answers
            $(".incorrect"+count).hide();
            // stop and hide timer
            stop();
            $("#time").hide();
            setTimeout(displayQuestion,1000*5);
        })
});
});