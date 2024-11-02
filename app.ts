import promptSync from "prompt-sync";
const prompt = promptSync();

import shuffledDeck from "./cards/deck";

function blackJack() {
  type playerAction = "hit" | "stand";

  let playerName = prompt("Enter Name: ");
  console.log(`Welcome to Black Jack, ${playerName}`);

  let balance: number = 100;
  console.log(`Your starting balance is ${balance}`);

  let playAgain = true;

  while (playAgain && balance > 0) {
    let inputBet: number = parseInt(prompt("Place your bet: "));

    if (isNaN(inputBet) || inputBet <= 0 || inputBet > balance) {
      console.log("Invalid bet amount. Try again.");
      continue;
    }

    balance -= inputBet;
    console.log(`Your current balance after bet: ${balance}`);

    playAgain(inputBet);
  }

  function play(bet: number) {
    let deckIndex: number = 0;

    const dealHand = (cardsCount: number): string[] => {
      const hand = shuffledDeck.slice(deckIndex, deckIndex + cardsCount);
      deckIndex += cardsCount;
      return hand;
    };

    function fight(playerHand: string[], dealerHand: string[]) {
      const playerSum = calculatedHandSum(playerHand);
      const dealerSum = calculatedHandSum(dealerHand);

      console.log(`Dealer's final hand: [${playerHand}] Total: ${dealerSum}`);
      console.log(`Your final hand: [${playerHand}] Total: ${playerSum}`);
    }
  }

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
