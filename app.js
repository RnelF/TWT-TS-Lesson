"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function blackJack() {
    let playerName = prompt("Enter your Name: ");
    console.log(`Welcome to BlackJack game ${playerName}`);
    let balance = 100;
    let playAgain = true;
    let inputBet = prompt("Place your bet:");
    let playerBet;
    function gameBet(bet) {
        if (!bet) {
            console.log("invalid input");
        }
        else {
            playerBet = bet;
        }
        return playerBet;
    }
    console.log;
    const carValue = [
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
    const cardSuits = ["Heart", "Diamond", "Clove", "Spade"];
    const createDeck = () => {
        const deck = [];
        for (let suit of cardSuits) {
            for (let value of carValue) {
                deck.push(`${value} of ${suit}`);
            }
        }
        return deck;
    };
    const shuffleDeck = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
        }
        return deck;
    };
    let deck = createDeck();
    deck = shuffleDeck(deck);
    const handedCards = () => {
        const card1 = deck[0];
        const card2 = deck[1];
        const hand = [card1, card2];
        return hand;
    };
    let playerHand = handedCards();
    console.log(playerHand);
    const playerHit = () => {
        const hitCard = deck[2];
        playerHand.push(hitCard);
    };
    playerHit();
    console.log(playerHand);
    const playerHandSum = () => {
        let sum = 0;
        let aceCount = 0;
        for (let card of playerHand) {
            const value = card.split(" ")[0]; // Get the value part of the card
            if (value === "A") {
                aceCount += 1;
                sum += 11; // Count Aces as 11 initially
            }
            else if (["J", "Q", "K"].includes(value)) {
                sum += 10; // Face cards (J, Q, K) are worth 10
            }
            else {
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
