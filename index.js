    var readlineSync= require("readline-sync")

    var score=0
    
    var highscore=[
        {
            name:"Abha",
            score:"4"
        },
        {
            name:"Alisha",
            score:3,
        }
    ]
    
    var allQuestions=[
        {
            question:"Where do i  live? ",
            answer:"home! hahaha"
        },
        {
            question:"My favourite superhero ",
            answer:"Batman"
        },
        {
            question:"where do i work? ",
            answer:"startup"
        },
        {
            question:"are you enjoying work ",
            answer:"yes"
        },
        {
            question:" what do you wanna to be?  " ,
            answer:"fullstack developer"
        }
    ]
    var questions=allQuestions
    
    var username= readlineSync.question("What is your name?   ")
    
    console.log("Welcome "+ username+" to play the Quiz")
    
    
    function play(question,answer){
        var useranswer= readlineSync.question(question)
    
        if (useranswer===answer){
            console.log("right!")
            score++
        } else {
            console.log("wrong!")
        }
    
        console.log("current score: ", score)
        console.log("--------")
    
    } 
    function game() {
        for (var i=0; i<questions.length; i++) {
          var currentQuestion = questions[i];
          play(currentQuestion.question, currentQuestion.answer)
        }
      }
      
      function showScores() {
        console.log("YAY! You SCORED: ", score);
      
//console.log("Check out the high scores, if you should be there ping me and I'll update it");
      
      //  highScores.map(score => console.log(score.name, " : ", score.score))
      }
      
      
      
      game();
      showScores();
      

