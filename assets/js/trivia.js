 
    var gameChoice = 5;
    var wins = 0;
    var losses = 0;
    var unAnswered = 0;
    var timeAllowed = 60;   // seconds 
    var myVar ;
     
var questionsAnswersArray = [   
   {
      question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",

      options: [ 'William and Elizabeth', 'Joseph and Catherine' ,'John and Mary','George and Anne'],

      answerINdex: 3
    },
    {
      question: "When did the Liberty Bell get its name?",
      options: [ "when it was made, in 1701",'when it rang on July 4, 1776', "in the 19th century, when it became a symbol of the abolition of slavery","none of the above"],
      answerINdex: 3
    },
     {
     question: "In the Roy Rogers -Dale Evans Museum you will find Roy and Dales stuffed horses. Roys horse was named Trigger which was Dales horse?",
      options: [ 'Buttermilk', 'Daisy', 'Scout', 'Tulip'],

      answerINdex:1 
    },
    {
     question: "Which of the following items was owned by the fewest U.S. homes in 1990?",   
        options: [ ' home computer', 'compact disk player', 'cordless phone', 'dishwasher'],
      answerINdex: 1
    }

  ];

   $(document).ready(function (){
     $("body").append(' <link rel="stylesheet" href="./assets/styles/style.css"/>');
     $("body").addClass("flower");
   });
    

function createForm(){
  
    $("#btnStart").remove();
    $("body").removeClass("flower");
    $("body").addClass("col-sm-8");
    console.log("form creating now...")
    var questionsForm = $("<form id='trivia-game-form'>")
    var timer   = $("<h3 id=timer> ");
    questionsForm.append(timer);

  for (var i = 0; i < questionsAnswersArray.length; i++) {
      console.log(questionsAnswersArray[i]);
      var questionToAsk = questionsAnswersArray[i].question;
      var currentQuestion = $("<h3>");
      currentQuestion.text(questionToAsk)
      console.log(currentQuestion);
      questionsForm.append(currentQuestion);
      var currentQuestionOptions = questionsAnswersArray[i].options
      console.log(currentQuestionOptions);
      var correctAnswer = questionsAnswersArray[i].answerINdex;   
  for (var j = 0; j < currentQuestionOptions.length; j++) {
      currentQuestionOptions[j] // ??
      var optionLabel = $("<label>");
      var optionInput = $("<input type='radio'>");
      optionLabel.html( currentQuestionOptions[j] );
      optionLabel.attr("for", j)
      var nameToAdd = "Q"+(i+1); // ??
      optionInput.attr("name", nameToAdd)
      optionInput.attr("id", j)
      optionInput.attr("value", ( j == correctAnswer ) )
      questionsForm.append(optionLabel);
      questionsForm.append(optionInput);

    } // END OF Options Arrary 
  } // End of questions arrY 
      var submitBtn = $("<button>");
      submitBtn.attr("id", "done")
      submitBtn.text("Submit")
      questionsForm.append(submitBtn);
      $("#divQuestions").append(questionsForm);
      timeAllowed = 60;   // seconds 
       myVar = setInterval(myTimer, 1000);
      } // End of Functoin createForm

function showResult(){
     $.each($('#trivia-game-form').serializeArray(), function(i, selected)   {
      console.log(selected);
      wins = ( (selected.value) ? wins++ :  wins );
      losses = ( (selected.value) ? losses :  losses++ );
      if  (selected.value === true) { 
        win++
   }
      else
      {
        losses++
      }
      
    }  );

   $("#divQuestions").remove();
      var resultwin = $("<h1>");
      resultwin.text("WINS " + wins);
      $("#divResult").append(resultwin);
      var resultlosses = $("<h1>");
      resultlosses.text("Losses " + losses);
      $("#divResult").append(resultlosses);
      var resultUA = $("<h1>");
      var UA = questionsAnswersArray.length - (wins + losses);
      resultUA.text("Unanswered  " + UA);
      $("#divResult").append(resultUA);
}  // end of showResult
function myTimer() {
      timeAllowed--;
      document.getElementById("timer").innerHTML = "Time remaning = " + timeAllowed ;
      if ( timeAllowed <= 0 ){
      clearTimeout(myVar);
      showResult() ; 
    }
}

$( "#btnStart" ).on("click", createForm)
$("#divQuestions").on("click", "#done", function() {
$( "#trivia-game-form" ).submit(function( event ) {
   console.log(event);

   showResult();
});


})
