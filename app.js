"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const deck_1 = __importDefault(require("./cards/deck"));
function blackJack() {
    let playerName = prompt("Enter your Name: ");
    console.log(`Welcome to BlackJack game ${playerName}`);
    let balance = 100;
    console.log(`Your balance is ${balance}`);
    let playAgain = true;
    let inputBet = prompt("Place your bet:");
    let bet = inputBet;
    if (inputBet) {
        gameBet();
    }
    function gameBet() {
        if (inputBet === isNaN) {
            console.log("invalid input");
        }
        else {
            balance -= bet;
            console.log(`your current balance is ${balance}`);
            play();
        }
    }
    function play() {
        let deckIndex = 0;
        const dealHand = (cardsCount) => {
            const hand = deck_1.default.slice(deckIndex, deckIndex + cardsCount);
            deckIndex += cardsCount;
            return hand;
        };
        let action = prompt("Player Action (Hit/Stand):");
    }
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
}
blackJack();
