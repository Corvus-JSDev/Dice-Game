'use strict';

console.time('test');

let playerOneScore = 0;
let playerTwoScore = 0;
let tempPoints = 0;
let activeSide = 'left';
const winningScore = 100;

const imgDice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');

rollBtn.addEventListener('click', function () {
    const score = diceRoll();

    // Add score to active player
    if (activeSide === 'left') {
        tempPoints += score;
        document.querySelector('#current--0').textContent = String(tempPoints);
    } else {
        tempPoints += score;
        document.querySelector('#current--1').textContent = String(tempPoints);
    }
});

function diceRoll() {
    let num = Math.ceil(Math.random() * 6);

    switch (num) {
        case 1:
            imgDice.src = './dice-pic/dice-1.png';
            tempPoints = -1;
            switchSides();
            break;
        case 2:
            imgDice.src = './dice-pic/dice-2.png';
            break;
        case 3:
            imgDice.src = './dice-pic/dice-3.png';
            break;
        case 4:
            imgDice.src = './dice-pic/dice-4.png';
            break;
        case 5:
            imgDice.src = './dice-pic/dice-5.png';
            break;
        case 6:
            imgDice.src = './dice-pic/dice-6.png';
            break;
        default:
            console.log(`Error: num equaled ${num}`);
            break;
    }

    return num;
}

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (activeSide === 'left') {
        playerOneScore += tempPoints;
        document.querySelector('#score--0').textContent = String(playerOneScore);

        if (playerOneScore >= winningScore) {
            document.querySelector('#name--0').textContent = 'WINNER!';
            document.querySelector('#name--1').textContent = 'LOSER!';
        } else {
            switchSides();
        }
    } else if (activeSide === 'right') {
        playerTwoScore += tempPoints;
        document.querySelector('#score--1').textContent = String(playerTwoScore);

        if (playerTwoScore >= winningScore) {
            document.querySelector('#name--1').textContent = 'WINNER!';
            document.querySelector('#name--0').textContent = 'LOSER!';
        } else {
            switchSides();
        }
    }

    tempPoints = 0;
});

document.querySelector('.btn--new').addEventListener('click', function () {
    location.reload();
});

function switchSides() {
    if (activeSide === 'left') {
        document.querySelector('#current--0').textContent = '0';

        setTimeout(() => {
            document.querySelector('section.player--0').classList.remove('player--active');
            document.querySelector('section.player--1').classList.add('player--active');
        }, 300);

        activeSide = 'right';
    } else if (activeSide === 'right') {
        document.querySelector('#current--1').textContent = '0';

        setTimeout(() => {
            document.querySelector('section.player--1').classList.remove('player--active');
            document.querySelector('section.player--0').classList.add('player--active');
        }, 300);

        activeSide = 'left';
    }
}
