import promptSync from "prompt-sync";
const prompt = promptSync();

function blackJack() {
  let playerName = prompt("Enter your Name: ");
  console.log(`Welcome to BlackJack game ${playerName}`);

  let balance: number = 100;
  let playAgain = true;

  let inputBet: unknown = prompt("Place your bet:");

  let playerBet;

  function gameBet(bet: number): void {
    if (!bet) {
      console.log("invalid input");
    } else {
      playerBet = bet;
    }

    return playerBet;
  }

  console.log;
  const carValue: string[] = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const cardSuits: string[] = ["Heart", "Diamond", "Clove", "Spade"];

  const createDeck = (): string[] => {
    const deck: string[] = [];
    for (let suit of cardSuits) {
      for (let value of carValue) {
        deck.push(`${value} of ${suit}`);
      }
    }
    return deck;
  };

  const shuffleDeck = (deck: string[]): string[] => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }
    return deck;
  };

  let deck = createDeck();

  deck = shuffleDeck(deck);

  const handedCards = (): string[] => {
    const card1: string = deck[0];
    const card2: string = deck[1];
    const hand: string[] = [card1, card2];
    return hand;
  };

  let playerHand: string[] = handedCards();

  console.log(playerHand);

  const playerHit = (): void => {
    const hitCard: string = deck[2];
    playerHand.push(hitCard);
  };

  playerHit();

  console.log(playerHand);
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
  console.log(playerHandSum());
}
