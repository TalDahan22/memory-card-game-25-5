const cards = document.querySelectorAll('.card');
const backs = document.querySelectorAll('.back');
const btn = document.querySelector('.button');
let cardsArray = ['&#128525;', '&#128525;',
    '&#128561;', '&#128561;',
    '&#128564;', '&#128564;',
    '&#128520;', '&#128520;',
    '&#128545;', '&#128545;',
    '&#129313;', '&#129313;'];
let matched = 0
let card1, card2;
card1loca, card2loca;
let score = 0, steps = 0;
let disableDeck = false;
let cardClicked = false;

function flipping() {
    for (let i = 0; i < backs.length; i++) {
        const randomNum = Math.floor(math.random() * (12 - i));
        backs[i].innerHTML = cardsArray[randomNum];
        cardsArray.splice(randomNum, 1);
    }
}
flipping();

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        if (!disableDeck) {
            cards[i].children[0].classList.add('flipped');
            steps++;









            // document.querySelector('.scoreP').textContent = "score:" + score;
            // disableDeck = true;
            // setTimeout(function () {
            //     backs[cardOneLocation].classList.add('foundCard');
            //     backs[cardTwoLocation].classList.add('foundCard');
            //     disableDeck=false;

            // },1500);

        }






    })


}