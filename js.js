var points = 0;
var timerInt = '';
var timer = 30;
var card = document.querySelectorAll('.container');

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
    this.classList.toggle('flip');
}

card.forEach(card => card.addEventListener('click', cardFlipper));

// checks if match

// count points

// go back