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

const createDeck = () => {
  const deck: string[] = [];
  for (let suit of cardSuits) {
    for (let value of carValue) {
      deck.push(`${value} of ${suit}`);
    }
  }
  return deck;
};

const shuffleDeck = (deck: string[]) => {
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

const playerHand: string[] = handedCards();

console.log(playerHand);

const playerHit = (): void => {
  const hitCard: string = deck[2];
  playerHand.push(hitCard);
};

playerHit();

console.log(playerHand);
