var myQuestions = [
    {
      question: "Deriver f(x) = x2 +lnx",
      answers: {
        a: "f'(x) = 2x + 1/x",
        b: "f'(x) = 4x + 2/x",
        c: "f'(x) = 2x + 2/x"
      },
      correctAnswer: 'a'
    },
    {
      question: "Løs lgx3 − 2lgx = 3",
      answers: {
        a: "x=2000",
        b: "x=100",
        c: 'x=1000'
      },
      correctAnswer: 'c'
    },
    {
      question: "Utfør polynomdivisjonen (x3 + 2x2 −5x −6):(x − 2)",
      answers: {
        a: "x2 + 4x + 3",
        b: "x4 + 4x + 3",
        c: "x2 + 3x + 3"
      },
      correctAnswer: 'a'
    },
    {
      question: "Bestem grenseverdien limx→ 1x2 −1x −1",
      answers: {
        a: "2",
        b: "5",
        c: "20"
      },
      correctAnswer: 'a'
    },
    {
      question: "What is 10/2?",
      answers: {
        a: '3',
        b: '5',
        c: '115'
      },
      correctAnswer: 'b'
    },
    {
      question: "Deriver f(x) = x2 +lnx",
      answers: {
        a: '3',
        b: '5',
        c: '115'
      },
      correctAnswer: 'b'
    },
    {
     
    
    },
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      var output = [];
      var answers;
  
      for(var i=0; i<questions.length; i++){
        
        answers = [];
  
        for(letter in questions[i].answers){
  
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      var userAnswer = '';
      var numCorrect = 0;
      
      for(var i=0; i<questions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;
          
          answerContainers[i].style.color = 'lightgreen';
        }
        else{
          answerContainers[i].style.color = 'red';
        }
      }
  
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }