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

    checkMatch();
}

// checks if match

function checkMatch () {
    var isMatch = firstC.dataset.name === secondC.dataset.name;
    isMatch ? cardsDisable() : notFlipped();
}

function cardsDisable () {
    firstC.removeEventListener('click', cardFlipper);
    secondC.removeEventListener('click', cardFlipper);
}

function notFlipped () {
    setTimeout(()=> {
        firstC.classList.remove('flip');
        secondC.classList.remove('flip');
    }, 1500);
} 
// count points

// go back

card.forEach(card => card.addEventListener('click', cardFlipper));