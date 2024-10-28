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

export default deck;
