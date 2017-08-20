// var correctAnswer = 0;
// var wrongAnswer = 0;

// function button() {
// 	var correctAnswer = $(".btn btn-primary").click(function() {

//   	if ($('#yes') = true) {
//   		correct ++;
//     }
//   	else {
//   		wrong++;
//  }
//  });
// }

var correctCounter = 0;
var wrongCounter = 0;
    
  $(document).ready(function() {
    
   $("#yes").click(function(){
    if (("#yes") == true)
     correctCounter++;
    
   $("#correct").text("correct: " +  correctCounter);
           
    });
   
   $("#no").click(function(){
    if (("#no") == true)
     wrongCounter++;
    
   $("#wrong").text("wrong: " + wrongCounter);
  });
});


//Timer function
var number = 30;

    var intervalId;

    $("#begin").on("click", run);
      //this function decreases by 1 second
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;
      
      $("#show-number").html("<h2>" + number + "</h2>");
       
      if (number === 0) {

        stop();

        alert("Time Up!");
      }
    }

    function stop() {
    
      clearInterval(intervalId);
    }

    run();
