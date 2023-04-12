// create key value pairs in a object for the questions and answers
// if statement that itterates throught the array of questions and if else statements if the question is wrong
// local storage to save the out put and upload them to the second html page
// create a leaderboard for the fastest time to asnwer the quiz
// listen event for individual answers based on a, b, c, or d respectivly


var questions = { // array for questions and answers
    question1: 'What does the word the word "this" refer to in javaScript?',
    wrongA1Q1: 'The local scope',
    wrongA2Q1: 'The html',
    wrongA3Q1: 'The body element of the html',
    rightAQ1: 'The global scope',
    question2: 'Which of these is not a primative data type?',
    rightAQ2: 'Object',
    wrongA1Q2: 'String',
    wrongA2Q2: 'Numeric Characters',
    wrongA3Q2: 'Boolean',
    question3: 'what does Math.random() do?',
    wrongA1Q3: 'A number between 1 and 1000',
    rightAQ3: 'A number between 0 and 1',
    wrongA2Q3: 'A random number',
    wrongA3Q3: 'A number between 0 and 100',
    question4: 'In javaScript, what is considered a conditional statement?',
    wrongA1Q4: 'function()',
    rightAQ4: 'if ()',
    wrongA2Q4: 'document.queryselector',
    wrongA3Q4: 'const =',
    question5: 'What does a object refer to in javaScript?',
    wrongA1Q5: 'A string',
    wrongA2Q5: 'A array of numeric characters',
    rightAQ5: 'A array with key value pairs',
    wrongA3Q5: 'A array of multiple strings'

};

// declaring the variables in the global scope to be used later in the function
var listquestions;
var lista1;
var lista2;
var lista3;
var lista4;
var button;
var isClicked;
var timerDisplay;
var time;
var restartBtn;

if (window.location.href.includes("index.html")) { // entire Q&A page is in a conditinal statement to only display if the user is interacting the the index.html
    var listquestions = document.getElementById('question');
    var lista1 = document.getElementById('1');
    var lista2 = document.getElementById('2');
    var lista3 = document.getElementById('3');
    var lista4 = document.getElementById('4');
    var button = document.getElementById('start');
    var isClicked = false;
    var time = 30;
    var timerDisplay = document.querySelector('#timer');


    function hidestuff() {  // hides all of the ui and only leaves the start button displayed 
        document.getElementById('answers').style.visibility = 'hidden';
        document.getElementById('question').style.visibility = 'hidden';
        document.getElementById('questiontitle').style.visibility = 'hidden';
        document.getElementById('timer').style.visibility = 'hidden';
    }
    if (window.location.href.includes("index.html")) {
        hidestuff()
    }

    button.addEventListener('click', function questionsAndAnswers1() { // listens for a event on the start button and runs the start of the quiz

        function updateTime() {
            time--;
            timerDisplay.textContent = `${time} seconds left`;
            if (time <= 0) {
                clearInterval(timerInterval);
                timerDisplay.innerHTML = 'Time is up!';
                window.location.href = './index2.html'
            }
        }
        let timerInterval = setInterval(updateTime, 1000);


        document.getElementById('timer').style.visibility = 'visible';
        document.getElementById('start').style.visibility = 'hidden';
        document.getElementById('answers').style.visibility = 'visible';
        document.getElementById('question').style.visibility = 'visible';
        document.getElementById('questiontitle').style.visibility = 'visible';
        button.removeEventListener
        listquestions.textContent = questions.question1;
        lista1.textContent = questions.wrongA1Q1;
        lista2.textContent = questions.wrongA2Q1;
        lista3.textContent = questions.wrongA3Q1;
        lista4.textContent = questions.rightAQ1;

        lista1.addEventListener('click', clicka1);
        lista2.addEventListener('click', clicka2);
        lista3.addEventListener('click', clicka3);
        lista4.addEventListener('click', clicka4);


        function clicka1() {
            if (! isClicked) {
                isClicked = true;
                console.log('i clicked 1, wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clicka1);
            lista2.removeEventListener('click', clicka2);
            lista3.removeEventListener('click', clicka3);
            lista4.removeEventListener('click', clicka4);
            return questionsAndAnswers2();
        }
        function clicka2() {
            if (! isClicked) {
                isClicked = true;
                console.log('i clicked 2 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clicka1);
            lista2.removeEventListener('click', clicka2);
            lista3.removeEventListener('click', clicka3);
            lista4.removeEventListener('click', clicka4);
            return questionsAndAnswers2();
        }
        function clicka3() {
            if (! isClicked) {
                isClicked = true;
                console.log('i clicked 3 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clicka1);
            lista2.removeEventListener('click', clicka2);
            lista3.removeEventListener('click', clicka3);
            lista4.removeEventListener('click', clicka4);
            return questionsAndAnswers2();
        }
        function clicka4() {
            if (! isClicked) {
                isClicked = true;
                console.log('i clicked 4 right answer')
                function updateCount() {
                    let count = sessionStorage.getItem('score');
                    count = Number(count) + 1;
                    sessionStorage.setItem('score', count);
                }
                updateCount();
                const score = sessionStorage.getItem('score');
                console.log(score);
            }
            lista1.removeEventListener('click', clicka1);
            lista2.removeEventListener('click', clicka2);
            lista3.removeEventListener('click', clicka3);
            lista4.removeEventListener('click', clicka4);
            return questionsAndAnswers2();
        }
    })

    function questionsAndAnswers2() {
        var isClicked1 = false;
        listquestions.textContent = questions.question2;
        lista1.textContent = questions.rightAQ2;
        lista2.textContent = questions.wrongA1Q2;
        lista3.textContent = questions.wrongA2Q2;
        lista4.textContent = questions.wrongA3Q2;

        lista1.addEventListener('click', clickb1);
        lista2.addEventListener('click', clickb2);
        lista3.addEventListener('click', clickb3);
        lista4.addEventListener('click', clickb4);

        function clickb1() {
            if (! isClicked1) {
                isClicked1 = true;
                // score = score + 1;
                // console.log(score)
                // console.log('i clicked 1 right answer')
                function updateCount() {
                    let count = sessionStorage.getItem('score');
                    count = Number(count) + 1;
                    sessionStorage.setItem('score', count);
                }
                updateCount();
                const score = sessionStorage.getItem('score');
                console.log(score);
            }

            lista1.removeEventListener('click', clickb1);
            lista2.removeEventListener('click', clickb2);
            lista3.removeEventListener('click', clickb3);
            lista4.removeEventListener('click', clickb4);
            return questionsAndAnswers3();
        };

        function clickb2() {
            if (! isClicked1) {
                isClicked1 = true;
                console.log('i clicked 2 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clickb1);
            lista2.removeEventListener('click', clickb2);
            lista3.removeEventListener('click', clickb3);
            lista4.removeEventListener('click', clickb4);
            return questionsAndAnswers3();
        };

        function clickb3() {
            if (! isClicked1) {
                isClicked1 = true;
                console.log('i clicked 3 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clickb1);
            lista2.removeEventListener('click', clickb2);
            lista3.removeEventListener('click', clickb3);
            lista4.removeEventListener('click', clickb4);
            return questionsAndAnswers3();
        };

        function clickb4() {
            if (! isClicked1) {
                isClicked1 = true;
                console.log('i clicked 4 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clickb1);
            lista2.removeEventListener('click', clickb2);
            lista3.removeEventListener('click', clickb3);
            lista4.removeEventListener('click', clickb4);
            return questionsAndAnswers3();
        };
    };
    function questionsAndAnswers3() {
        let isClicked2 = false;
        listquestions.textContent = questions.question3;
        lista1.textContent = questions.wrongA1Q3;
        lista2.textContent = questions.rightAQ3;
        lista3.textContent = questions.wrongA2Q3;
        lista4.textContent = questions.wrongA3Q3;

        lista1.addEventListener('click', function () {
            if (! isClicked2) {
                isClicked2 = true;
                console.log('i clicked 1 wrong answer')
            }
            time = Number(time) - 5;
            return questionsAndAnswers4();
        });
        lista2.addEventListener('click', function () {
            if (! isClicked2) {
                isClicked2 = true;
                function updateCount() {
                    let count = sessionStorage.getItem('score');
                    count = Number(count) + 1;
                    sessionStorage.setItem('score', count);
                }
                updateCount();
                const score = sessionStorage.getItem('score');
                console.log(score);
            }
            return questionsAndAnswers4();
        });
        lista3.addEventListener('click', function () {
            if (! isClicked2) {
                isClicked2 = true;
                console.log('i clicked 3 wrong answer')
            }
            time = Number(time) - 5;
            return questionsAndAnswers4();
        });
        lista4.addEventListener('click', function () {
            if (! isClicked2) {
                isClicked2 = true;
                console.log('i clicked 4 wrong answer')
            }
            time = Number(time) - 5;
            return questionsAndAnswers4();
        });
    }

    function questionsAndAnswers4() {
        let isClicked3 = false;
        listquestions.textContent = questions.question4;
        lista1.textContent = questions.wrongA1Q4;
        lista2.textContent = questions.rightAQ4;
        lista3.textContent = questions.wrongA2Q4;
        lista4.textContent = questions.wrongA3Q4;

        lista1.addEventListener('click', clickc1);
        lista2.addEventListener('click', clickc2);
        lista3.addEventListener('click', clickc3);
        lista4.addEventListener('click', clickc4);

        function clickc1() {
            if (! isClicked3) {
                isClicked3 = true;
                console.log('i clicked 1 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clickc1);
            lista2.removeEventListener('click', clickc2);
            lista3.removeEventListener('click', clickc3);
            lista4.removeEventListener('click', clickc4);
            return questionsAndAnswers5();
        };


        function clickc2() {
            if (! isClicked3) {
                isClicked3 = true;
                function updateCount() {
                    let count = sessionStorage.getItem('score');
                    count = Number(count) + 1;
                    sessionStorage.setItem('score', count);
                }
                updateCount();
                const score = sessionStorage.getItem('score');
                console.log(score);
            }
            lista1.removeEventListener('click', clickc1);
            lista2.removeEventListener('click', clickc2);
            lista3.removeEventListener('click', clickc3);
            lista4.removeEventListener('click', clickc4);
            return questionsAndAnswers5();
        };

        function clickc3() {
            if (! isClicked3) {
                isClicked3 = true;
                console.log('i clicked 3 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clickc1);
            lista2.removeEventListener('click', clickc2);
            lista3.removeEventListener('click', clickc3);
            lista4.removeEventListener('click', clickc4);
            return questionsAndAnswers5();
        };

        function clickc4() {
            if (! isClicked3) {
                isClicked3 = true;
                console.log('i clicked 4 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clickc1);
            lista2.removeEventListener('click', clickc2);
            lista3.removeEventListener('click', clickc3);
            lista4.removeEventListener('click', clickc4);
            return questionsAndAnswers5();
        }
    };

    function questionsAndAnswers5() {
        let isClicked4 = false;
        listquestions.textContent = questions.question5;
        lista1.textContent = questions.wrongA1Q5;
        lista2.textContent = questions.wrongA2Q5;
        lista3.textContent = questions.rightAQ5;
        lista4.textContent = questions.wrongA3Q5;

        lista1.addEventListener('click', clickd1);
        lista2.addEventListener('click', clickd2);
        lista3.addEventListener('click', clickd3);
        lista4.addEventListener('click', clickd4);

        function clickd1() {
            if (! isClicked4) {
                isClicked4 = true;
                console.log('i clicked 1 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clickd1);
            lista2.removeEventListener('click', clickd2);
            lista3.removeEventListener('click', clickd3);
            lista4.removeEventListener('click', clickd4);
            window.location.href = './index2.html';
        };

        function clickd2() {
            if (! isClicked4) {
                isClicked4 = true;
                console.log('i clicked 2 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clickd1);
            lista2.removeEventListener('click', clickd2);
            lista3.removeEventListener('click', clickd3);
            lista4.removeEventListener('click', clickd4);
            window.location.href = './index2.html';
        };

        function clickd3() {
            if (! isClicked4) {
                isClicked4 = true;
                function updateCount() {
                    let count = sessionStorage.getItem('score');
                    count = Number(count) + 1;
                    sessionStorage.setItem('score', count);
                }
                updateCount();
                const score = sessionStorage.getItem('score');
                console.log(score);
            }
            lista1.removeEventListener('click', clickd1);
            lista2.removeEventListener('click', clickd2);
            lista3.removeEventListener('click', clickd3);
            lista4.removeEventListener('click', clickd4);
            window.location.href = './index2.html';
        };

        function clickd4() {
            if (! isClicked4) {
                isClicked4 = true;
                console.log('i clicked 4 wrong answer')
            }
            time = Number(time) - 5;
            lista1.removeEventListener('click', clickd1);
            lista2.removeEventListener('click', clickd2);
            lista3.removeEventListener('click', clickd3);
            lista4.removeEventListener('click', clickd4);
            window.location.href = './index2.html';
        };
    };
};

var displayTimeLeft = document.getElementById('timedScoreUpdate')
console.log(count)

var count = sessionStorage.getItem('score');
console.log(count)

function toHighScores() {
    var displayScore = document.getElementById('highScoreUpdate');
    displayScore.textContent = count;
    console.log(displayScore.textContent)
} toHighScores();
