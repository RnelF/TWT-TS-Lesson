"use strict";
let monsterHP = 100;
let playerHP = 100;
const monster = [
    {
        monsterName: "Rabituzah",
        monsterLvl: 2,
        monsterDmg: 20,
        monsterAgi: 5,
        monsterDef: 10,
        monsterEvasion: 5,
        monsterHP: 20,
    },
    {
        monsterName: "Cobra",
        monsterLvl: 3,
        monsterDmg: 26,
        monsterAgi: 7,
        monsterDef: 14,
        monsterEvasion: 10,
        monsterHP: 25,
    },
];
function monsterFighting() {
    const randomNumber = Math.floor(Math.random() * monster.length);
    return randomNumber;
}
const weaponShop = [
    {
        itemName: "Sword",
        goldCost: 10,
        weaponDmg: 15,
        weaponDurability: 60,
    },
    {
        itemName: "Dagger",
        goldCost: 15,
        weaponDmg: 13,
        weaponDurability: 70,
    },
    {
        itemName: "Katana",
        goldCost: 20,
        weaponDmg: 17,
        weaponDurability: 80,
    },
];
const playerEquipment = [weaponShop[0]];
const playerDamage = playerEquipment[0].weaponDmg / 2;
function playerDamagetoMonsterCalculation() {
    const monsterHealth = randomMonster.monsterHP;
    return monsterHealth - playerDamage;
}
let randomMonster = monster[monsterFighting()];
function game(action) {
    monsterFighting();
    const monster = randomMonster.monsterName;
    randomMonster.monsterHP = playerDamagetoMonsterCalculation();
    if (action === "Attack") {
        playerDamagetoMonsterCalculation();
        return console.log(`you Attacked ${monster} and inflicted ${playerDamage}! the Current monster HP is ${randomMonster.monsterHP}`);
    }
    else if (action === "Run") {
        return console.log("You Run");
    }
    else if (action === "Block") {
        return console.log(`You will block the monster's next Attack`);
    }
}
game("Attack");
