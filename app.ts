import promptSync from "prompt-sync";
const prompt = promptSync();

import shuffledDeck from "./cards/deck";

function blackJack() {
  type playerAction = "hit" | "stand";
  
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

    function fight() {
      let playerWin: number = bet + bet;
      if (playerHand > dealerHand) {
        console.log(`You win! `);
        balance += playerWin;
      } else if (playerHand < dealerHand) {
        console.log(`You lose!! Current balance is ${balance}`);
      }
    }

    //PLAYER HAND
    let playerHand: string[] = dealHand(2);

    if (calculatedHandSum(playerHand) === 21) {
      const blackJackWin: number = bet * 1.5;
      balance += blackJackWin;
      console.log(`BlackJack!! you win ${blackJackWin}`);
    } else {
      console.log(
        `Your hand [${playerHand}] Total: ${calculatedHandSum(playerHand)}`
      );
    }

    //DEALER HAND
    let dealerHand: string[] = dealHand(2);

    console.log(`Dealers hand [${dealerHand[0]}, [hidden]]`);

    let action: playerAction = prompt("Player Action (Hit/Stand):");

    function playerHit(): void {
      const hitCard: string[] = dealHand(1);
      playerHand.push(hitCard[0]);
      console.log(`You drew ${hitCard[0]}`);
      console.log(
        `Your hand [${playerHand}] Total: ${calculatedHandSum(playerHand)}`
      );

      if (calculatedHandSum(playerHand) > 21) {
        console.log(`You've got Busted!!`);
      }
    }

    if (action === "hit") {
      playerHit();
      action = prompt("Player Action (Hit/Stand):");
    } else {
      fight();
    }
  }

  //HAND SUM
  function calculatedHandSum(hand: string[]): number {
    let sum = 0;
    let aceCount = 0;
    for (let card of hand) {
      const value = card.split(" ")[0];

      if (value === "A") {
        aceCount += 1;
        sum += 11;
      } else if (["J", "Q", "K"].includes(value)) {
        sum += 10;
      } else {
        sum += parseInt(value);
      }
    }

    while (sum > 21 && aceCount > 0) {
      sum -= 10;
      aceCount -= 1;
    }

    return sum;
  }
}

blackJack();
