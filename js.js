var points = 0;
var timerInt = '';
var timer = 30;

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

// checks if match

// count points

// go back