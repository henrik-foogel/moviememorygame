var points = 0;
var timerInt = '';
var timer = 30;
var cards = document.querySelectorAll('.container');
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

// shuffle cards
(function shuffle () {
    cards.forEach(cardShuffle => {
        var randomPositions = Math.floor(Math.random() * 12);
        cardShuffle.style.order = randomPositions;
    });
})();

// flip cards
function cardFlipper () {
    if(this === firstC) return;
    this.classList.add('flip');

    if(!isFlipped) {
        isFlipped = true;
        firstC = this;
        return;
    }

    secondC = this;
    locked = true;

    checkMatch();
}

// checks if match
function checkMatch () {

    if(secondC.firstElementChild.id == firstC.firstElementChild.id) {
        points++;
        cardsDisable()
    } else {
        flippBack()
    }
}

// disable cards
function cardsDisable () {
    firstC.firstElementChild.removeEventListener('click', cardFlipper);
    secondC.firstElementChild.removeEventListener('click', cardFlipper);
    firstC.classList.add('disabled')
    secondC.classList.add('disabled')
    reset();
}

// if not matched
function flippBack () {
    cards.forEach(card => card.removeEventListener('click', cardFlipper));
    setTimeout(()=> {
        firstC.classList.remove('flip');
        secondC.classList.remove('flip');
        
cards.forEach(card => card.addEventListener('click', cardFlipper));
        reset();
    }, 700);
} 

// reset cards
function reset() {
    //firstC.classList.remove('flip');
    isFlipped = false;
    firstC = null;
    secondC = null;
}
// go back

cards.forEach(card => card.addEventListener('click', cardFlipper));