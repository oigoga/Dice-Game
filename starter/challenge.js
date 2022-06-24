/*
3 Challenges 
1. A player looses his entire score when he rolls two sixes in a row 
(HINT Alwasy save the previous dice roll in a separate variable)
2.Add an input field to the HTML where the players can set the winning score,
so that they can change the predefined score of 100. (HINT You can reaad 
that value with the .value property in Javascript. This is a good opportunity
to use google to figure this out)
3. Add another dice to the game, so that there are two dices now. The player looses his
current score when one of them is a 1. (HINT You will need CSS to position the second dice,
take a look at the code for the first one)
*/ 






var scores, roundScore, activePlayer, gamePlaying;
var lastDice;
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

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
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1') .src = './starter/dice-' + dice1 + '.png';
    document.getElementById('dice-2') .src = './starter/dice-' + dice2 + '.png';
    // 3. Update the round score if the rolled number was not a 1
    if (dice1 !== 1 && dice2 !== 1) {
        // Add Score
        roundScore += dice1 + dice2 ;
        document.querySelector('#current-' + activePlayer).textContent =
          roundScore;
      } else {
        // Next - Player
        nextPlayer();
      }




    /*if (dice === 6 && lastDice === 6) {
        // player loses score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 0;
        nextPlayer()

    } else if (dice !== 1) {
      // Add Score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent =
        roundScore;
    } else {
      // Next - Player
      nextPlayer();
    }
    lastDice = dice;*/
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
  if (scores[activePlayer] >= 100) {
    document.querySelector('#name--' + activePlayer).textContent = 'Winner!!';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
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

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);

// document.querySelector('.player--0').classList.remove('player--active');
// document.querySelector('.player--1').classList.add('player--active');
