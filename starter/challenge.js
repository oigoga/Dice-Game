var scores, roundScore, activePlayer, gamePlaying;
var lastDice;
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector('.dice').style.display = 'none';

  gamePlaying = true;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');

  document.querySelector('.player--0').classList.add('player--active');
}
init();

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = dice;

document.querySelector('.btn-roll').addEventListener('click', function () {
  if (gamePlaying) {
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score if the rolled number was not a 1
    if (dice === 6 && lastDice === 6) {
        // player loses score
    } else if (dice !== 1) {
      // Add Score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent =
        roundScore;
    } else {
      // Next - Player
      nextPlayer();
    }
    lastDice = dice;
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (gamePlaying){
    // Add current score to global score
  scores[activePlayer] += roundScore;

  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent =
    scores[activePlayer];

  // Check if player won the game.
  if (scores[activePlayer] >= 20) {
    document.querySelector('#name--' + activePlayer).textContent = 'Winner!!';
    document.querySelector('.dice').style.display = 'none';
    document
      .querySelector('.player--' + activePlayer)
      .classList.add('player--winner');
    document
      .querySelector('.player--' + activePlayer)
      .classList.remove('active');
      gamePlaying = false;
  } else {
    // Next - Player
    nextPlayer();
  }
  }
  
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);

// document.querySelector('.player--0').classList.remove('player--active');
// document.querySelector('.player--1').classList.add('player--active');
