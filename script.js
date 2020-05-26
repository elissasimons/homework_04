var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById('quizContainer');
var shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);

//create onclick function
//console log when button clicks


//create arrays for questions, answers etc
//for loop to run through

//create array for answers

function startGame() {
    console.log('Game has started');
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function selectAnswer() {

}

var questions = [
    //question: 'Question 1 is here',
    //answers: [
       // { text: '4', correct: true},
      //  { text: '22', correct: false }
    //]
]