//Use to display the quiz

function DisplayQuiz() {
  var x = document.getElementById("QuizContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}





gsap.from(".button", {
  duration: 1,
  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
  ease: "back",
  force3D: true
});


document.querySelectorAll(".button").forEach(function(ShowQuiz) {
    ShowQuiz.addEventListener("click", function() {

      gsap.from("#QuizContainer", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        ease: "back",
        force3D: true
      });

});
});


///Script for the QuizContainer



//Questions Javascipt code//

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
//function that belongs to questions //
Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
}


//Scores and number of Questions//

function Quiz(questions) {
  this.score = 0; //Score attribute
  this.questions = questions; //Question attribute
  this.questionIndex = 0; //Question index
}
//Shows index of questions
Quiz.prototype.getquestionIndex = function() {
  return this.questions[this.questionIndex];
}
//Checks to see if quiz has ended
Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex
}

//If answer is correct or not
Quiz.prototype.guess = function(answer){


  if(this.getquestionIndex().correctAnswer(answer)){
    this.score++;
  }
  this.questionIndex++;
}


//Application - Get quiz to work in the html

//functions for application of Quiz


//Populates the questions class with the actual questions
function populate() {
  if(quiz.isEnded()) {
    showScore();
  }
  else {
    //If not finished, show the next question /
    var element = document.getElementById('QuizQuestions');
        element.innerHTML = quiz.getquestionIndex().text;

    //show choices populate

    var choices = quiz.getquestionIndex().choices;

    for (var i= 0; i < choices.length; i++) {
              var element = document.getElementById('Choice' + i);//choice 0
              element.innerHTML = choices[i];

      guess("Button" + i, choices[i]);
    }

    ShowProgress();
  }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}



//show progress of Quiz
function ShowProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("QuestionNumber");
  element.innerHTML = "Question  " +  currentQuestionNumber + " of " + quiz.questions.length;
}


//Display score and show the end of the quiz

function showScore() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<p id='Score'> Your score is "+ quiz.score +".</p><p>Read the legend of coffees discovery below!</p>";
  var element = document.getElementById("CoffeeQuiz");
  element.innerHTML = gameOverHTML;
}

//show scores functions




 //In order of Text, choices, answer
 var questions = [
     new Question("Where was coffee first discovered?", ["Ethiopia", "Kenya", "Nigeria", "Italy"], "Ethiopia"),
     new Question("When was coffee first discovered?", ["10th Century", "11th Century", "12th Century", "13th Century"], "11th Century"),
     new Question("In what century did coffee begin to be drank regularly?", ["13th Century", "14th Century", "15th Century", "16th Century"], "15th Century"),
     new Question("Which animal, according to legend, lead to the discovery of the effect of coffee?", ["A Goat", "A Pig", "A Sheep", "A Cow"], "A Goat"),
     new Question("What is the worlds most produced coffee species?", ["Arabica", "Robusta", "Liberica", "Vasatrix"], "Arabica"),

 ];

//Send the questions that have been created
var quiz = new Quiz(questions);

populate();



gsap.from("img", {
  duration: 1,
  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
  ease: "back",
  force3D: true
});
