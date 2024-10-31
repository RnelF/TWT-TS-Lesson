"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const deck_1 = __importDefault(require("./cards/deck"));
function blackJack() {
    let playerName = prompt("Enter Name: ");
    console.log(`Welcome to Black Jack, ${playerName}`);
    let balance = 100;
    console.log(`Your starting balance is ${balance}`);
    let playAgain = true;
    while (playAgain && balance > 0) {
        let inputBet = parseInt(prompt("Place your bet: "));
        if (isNaN(inputBet) || inputBet <= 0 || inputBet > balance) {
            console.log("Invalid bet amount. Try again.");
            continue;
        }
        balance -= inputBet;
        console.log(`Your current balance after bet: ${balance}`);
        playAgain(inputBet);
    }
    function play(bet) {
        let deckIndex = 0;
        const dealHand = (cardsCount) => {
            const hand = deck_1.default.slice(deckIndex, deckIndex + cardsCount);
            deckIndex += cardsCount;
            return hand;
        };
        function fight(playerHand, dealerHand) {
            const playerSum = calculatedHandSum(playerHand);
        }
    }
}
