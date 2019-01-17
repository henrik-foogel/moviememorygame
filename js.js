var points = 0;
var timerInt = '';
var timer = 30;
var card = document.querySelectorAll('.container');
var isFlipped = false;
var firstC, secondC; 
var locked = false;

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

(function shuffle () {
    card.forEach(cardShuffle => {
        var randomPositions = Math.floor(Math.random() * 12);
        cardShuffle.style.order = randomPositions;
    });
})();

// flip cards

function cardFlipper () {
    if (locked) return;
    if(this === firstC) return;
    this.classList.add('flip');

    if(!isFlipped) {
        isFlipped = true;
        firstC = this;
        return;
    }

    secondC = this;

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
    reset();
}

function notFlipped () {
    locked = true;
    setTimeout(()=> {
        firstC.classList.remove('flip');
        secondC.classList.remove('flip');

        reset();
    }, 1500);
} 
// count points

// reset cards
function reset() {
    [isFlipped, locked] = [false, false];
    [firstC, secondC] = [null, null];
}
// go back

card.forEach(card => card.addEventListener('click', cardFlipper));