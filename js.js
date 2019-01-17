var points = 0;
var timerInt = '';
var timer = 30;
var card = document.querySelectorAll('.container');
var isFlipped = false;
var firstC, secondC; 

function timerInterval () {
    timerInt = setInterval (() => {
        timer--;
        if(timer == 0) {
            clearInterval(timerInt);
        };
    },1000);
};

// start game

// shuffle cards

// flip cards

function cardFlipper () {
    this.classList.add('flip');

    if(!isFlipped) {
        isFlipped = true;
        firstC = this;
        return;
    }

    secondC = this;
    isFlipped = false;
}

card.forEach(card => card.addEventListener('click', cardFlipper));

// checks if match

// count points

// go back