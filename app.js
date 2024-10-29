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
        //PLAYER HAND
        let playerHand = dealHand(2);
        console.log(`Your hand [${playerHand}] Total: ${calculatedHandSum(playerHand)}`);
        //DEALER HAND
        let dealerHand = dealHand(2);
        console.log(`Dealers hand [${dealerHand[0]}, [hidden]]`);
        let action = prompt("Player Action (Hit/Stand):");
        function playerHit() {
            const hitCard = dealHand(1);
            playerHand.push(hitCard[0]);
            console.log(`You drew ${hitCard[0]}`);
            console.log(`Your hand [${playerHand}] Total: ${calculatedHandSum(playerHand)}`);
        }
        while (action === "hit") {
            playerHit();
            action = prompt("Player Action (Hit/Stand):");
        }
    }
    //HAND SUM
    function calculatedHandSum(hand) {
        let sum = 0;
        let aceCount = 0;
        for (let card of hand) {
            const value = card.split(" ")[0];
            if (value === "A") {
                aceCount += 1;
                sum += 11;
            }
            else if (["J", "Q", "K"].includes(value)) {
                sum += 10;
            }
            else {
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
