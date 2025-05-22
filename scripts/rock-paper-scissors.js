/* I updated the score to localStorage below so that the score will be unchanged when the site is refreshed */

let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    // if (!score)
   /* if (score === null) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
    } */

    // I used JS object to update the score
   /* const score = {
      wins: 0,
      losses: 0,
      ties: 0
    }; */

    //The function below will display the score on the webpage 
    updateScoreElement();

    /*document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; */

      /* Below is where i used multiple if statements to analyse the score and diplays it on the webpage */
    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
        result = 'You lose.';
        } else if (computerMove === 'paper') {
        result = 'You win.';
        } else if (computerMove === 'scissors') {
        result = 'Tie.';
        }
      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }
      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      }

      if (result === 'You win.') {
        //shortcut below
        score.wins += 1;
        //score.wins = score.wins + 1;
      } else if (result === 'You lose.') {
        score.losses += 1;
      } else if (result === 'Tie.') {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      /* Here the results is being updated and below i used images to display the score on the webpage */
      updateScoreElement();

      document.querySelector('.js-result')
        .innerHTML = result;

      document.querySelector('.js-moves')
        .innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    }

        /* .innerHTML = `You ${playerMove} - ${computerMove} Computer`; */
      
        // the code below shows the score in a popup rather than the webpage
     
        /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`); */

    /* Here is where i created the updateScore funtion that is being called on the buttons in the HTML */
    function updateScoreElement() {
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    /* This is where the game was created, Computer picks random number for result */
    function pickComputerMove() {
      const randomNumber = Math.random();
      
      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
       computerMove = 'rock';
      //console.log('rock');
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
        //console.log('paper');
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
        //console.log('scissors');
      }
        //console.log(computerMove);
        //console.log(randomNumber);

        return computerMove;
    }