import promptSync from "prompt-sync";
const prompt = promptSync();

import shuffledDeck from "./cards/deck";

function blackJack() {
  let playerName = prompt("Enter your Name: ");
  console.log(`Welcome to BlackJack game ${playerName}`);

  let balance: number = 100;
  console.log(`Your balance is ${balance}`);

  let playAgain = true;

  let inputBet: any = prompt("Place your bet:");

  let bet = inputBet;

  if (inputBet) {
    gameBet();
  }

  function gameBet() {
    if (inputBet === isNaN) {
      console.log("invalid input");
    } else {
      balance -= bet;
      console.log(`your current balance is ${balance}`);
      play();
    }
  }

  function play() {
    let deckIndex: number = 0;

    const dealHand = (cardsCount: number): string[] => {
      const hand = shuffledDeck.slice(deckIndex, deckIndex + cardsCount);
      deckIndex += cardsCount;
      return hand;
    };

    let action = prompt("Player Action (Hit/Stand):");
  }

  const playerHandSum = (): number => {
    let sum = 0;
    let aceCount = 0;
    for (let card of playerHand) {
      const value = card.split(" ")[0]; // Get the value part of the card
      if (value === "A") {
        aceCount += 1;
        sum += 11; // Count Aces as 11 initially
      } else if (["J", "Q", "K"].includes(value)) {
        sum += 10; // Face cards (J, Q, K) are worth 10
      } else {
        sum += parseInt(value); // Number cards are worth their face value
      }
    }
    // Adjust for Aces if the sum is over 21
    while (sum > 21 && aceCount > 0) {
      sum -= 10;
      aceCount -= 1;
    }
    return sum;
  };
}

blackJack();
