const cards = document.querySelectorAll(".card");
const backs = document.querySelectorAll('.back');
const btn = document.querySelector('.refresh');

let cardsArray = ['&#128525;', '&#128525;',
    '&#128561;', '&#128561;',
    '&#128564;', '&#128564;',
    '&#128520;', '&#128520;',
    '&#128545;', '&#128545;',
    '&#129313;', '&#129313;'];
let matched = 0;
let cardOne, cardTwo;
let cardOneLocation, cardTwoLocation;
let score = 0, steps = 0;
let disableDeck = false;
let cardClicked = false;

//הכנסה של 12 אימוגים בצורה רנדומלית 
function flipping() {
    for (let i = 0; i < backs.length; i++) {
        const randomNum = Math.floor(Math.random() * (12 - i));
        backs[i].innerHTML = cardsArray[randomNum];
        cardsArray.splice(randomNum, 1);
    }
}

flipping();
// איבנט של לחיצה
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        if(!disableDeck)
        {
        cards[i].children[0].classList.add('flipped');
        steps++;
        document.querySelector('.stepsP').textContent = "steps:" + steps;
        if (!cardClicked) {
            cardOne = backs[i].innerHTML;
            cardOneLocation = i;
        } else {
            cardTwo = backs[i].innerHTML;
            cardTwoLocation = i;
        }
        cardClicked = !cardClicked;

        if (cardOne === cardTwo) {
            score++;
            document.querySelector('.scoreP').textContent = "score:" + score;
            disableDeck = true;
            setTimeout(function () {
                backs[cardOneLocation].classList.add('foundCard');
                backs[cardTwoLocation].classList.add('foundCard');
                disableDeck = false;
            }, 1500);
        } else {
            if (!cardClicked) {
                disableDeck = true;
                setTimeout(function () {
                    disableDeck = false;
                    cards[cardOneLocation].children[0].classList.remove('flipped');
                    cards[cardTwoLocation].children[0].classList.remove('flipped');
                }, 1200);
            }

        }
    }
    })

}

btn.onclick = function () {
    for (let i = 0; i < cards.length; i++) {
        cards[i].children[0].classList.remove('flipped');
    }
    cardsArray = ['&#128525;', '&#128525;',
        '&#128561;', '&#128561;',
        '&#128564;', '&#128564;',
        '&#128520;', '&#128520;',
        '&#128545;', '&#128545;',
        '&#129313;', '&#129313;'];
    flipping();
    steps = 0;
    document.querySelector('.stepsP').textContent = "steps:" + steps;
    score= 0;
    document.querySelector('.scoreP').textContent = "score:" + score;

};
