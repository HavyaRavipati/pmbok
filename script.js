var cur_Q = 0;
var score = 0;
var tot_Q = questions.length;

var container = document.getElementById('quizcon');
var que_El = document.getElementById('question');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

function NextQuestion(){
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Select the answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[cur_Q].answer != answer){
        alert('Oops! The answer is wrong! Better luck next time');
    }
    if(questions[cur_Q].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    cur_Q++;
    if (cur_Q == tot_Q){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Total Score: ' + score;
        return;
    }
    if(cur_Q == tot_Q - 1){
        nextButton.textContent = 'Finish';
    }
    loadQuestion(cur_Q);
}

function loadQuestion(questionindex) {
    var que = questions[questionindex];
    que_El.textContent = (questionindex + 1) + '. ' + que.question;
    opt1.textContent = que.option1;
    opt2.textContent = que.option2;
    opt3.textContent = que.option3;
    opt4.textContent = que.option4;
};
loadQuestion(cur_Q);





