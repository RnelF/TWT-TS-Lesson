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

    play(inputBet);
    playAgain =
      prompt("Do you want to play again? (yes/no): ").toLowerCase() === "yes";
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

      if (playerSum > 21) {
        console.log("You busted Dealer wins.");
      } else if (dealerSum > 21 || playerSum > dealerSum) {
        console.log("You win!");
        balance += bet * 2;
      } else if (playerSum < dealerSum) {
        console.log("Dealer wins!");
      } else {
        console.log("It's a tie! Bet returned.");
        balance += bet;
      }
      console.log(`Your current balance: ${balance}`);
    }

    //Deal initial hands
    let playerHand: string[] = dealHand(2);
    let dealerHand: string[] = dealHand(2);

    if (calculatedHandSum(playerHand) === 21) {
      const blackJackWin: number = bet * 2.5;
      console.log(`BlackJack! You win ${blackJackWin}`);
      return;
    } else {
      console.log(
        `Your hand [${playerHand}] Total: ${calculatedHandSum(playerHand)}`
      );
      console.log(`Dealer's hand [${dealerHand[0]}, [hidden]]`);
    }

    //player action loop
    let action: playerAction = prompt(
      "Player Action: (hit/stand): "
    ).toLocaleLowerCase() as playerAction;

    while (action === "hit") {
      const hitCard: string = dealHand(1)[0];
      playerHand.push(hitCard);
      console.log(`You drew ${hitCard}`);
      console.log(
        `Your hand [${playerHand}] Total: ${calculatedHandSum(playerHand)}`
      );

      action = prompt(
        "player Action (hit/stand): "
      ).toLowerCase() as playerAction;
    }

    //Dealer's turn

    while (calculatedHandSum(dealerHand) < 17) {
      const dealerHitCard: string = dealHand(1)[0];
      dealerHand.push(dealerHitCard);
      console.log(`Dealer draws ${dealerHitCard}`);
    }

    //Resolve Game
    fight(playerHand, dealerHand);
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

blackJack();
