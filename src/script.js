'use strict';

let rounds = 1;
let playerScore = 0;
let compScore = 0;

const computerPlay = function (_) {
  const possibilities = ['rock', 'paper', 'scissors'];
  let result = possibilities[Math.floor(Math.random() * possibilities.length)];

  return result;
};

const playerPlay = function (_) {
  const guess = prompt(
    "Play Rock-Paper-Scissors!! What's your guess?"
  ).toLowerCase();
  const result =
    guess === 'rock'
      ? guess
      : guess === 'paper'
      ? guess
      : guess === 'scissors'
      ? guess
      : false;

  return result;
};

const playRound = function (playerSelection, computerSelection) {
  const compRock = computerSelection === 'rock';
  const compPaper = computerSelection === 'paper';
  const compScissors = computerSelection === 'scissors';
  const guessRock = playerSelection === 'rock';
  const guessPaper = playerSelection === 'paper';
  const guessScissors = playerSelection === 'scissors';

  if (playerSelection) {
    if (
      (compRock && guessRock) ||
      (compPaper && guessPaper) ||
      (compScissors && guessScissors)
    ) {
      console.log("It's a tie this round");
    }
    if (
      (compRock && guessPaper) ||
      (compPaper && guessScissors) ||
      (compScissors && guessRock)
    ) {
      console.log(
        `You Win this round! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
      );
      return (playerScore += 1);
    }
    if (
      (compRock && guessScissors) ||
      (compPaper && guessRock) ||
      (compScissors && guessPaper)
    ) {
      console.log(
        `You Lose this round! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
      );
      return (compScore += 1);
    }
  } else {
    console.log(
      'You have to choose from the following: "Rock", "Paper" or "Scissors"'
    );
  }
};

const game = function (_) {
  const playGame = function (_) {
    return playRound(playerPlay(), computerPlay());
  };
  while (rounds <= 5) {
    playGame();
    console.log(
      `The score after this round is: You: ${playerScore}, Computer: ${compScore}`
    );
    rounds += 1;
  }

  const winner = function (_) {
    if (playerScore > compScore)
      return `You WIN the game with the general score of ${playerScore} : ${compScore}`;
    else if (playerScore < compScore)
      return `You LOST the game with the general score of ${compScore} : ${playerScore}`;
    else if (playerScore === compScore)
      return `It's a draw with the general score of ${playerScore} : ${compScore}`;
  };

  return winner();
};

console.log(game());
