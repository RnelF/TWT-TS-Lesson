"use strict";
let playerActions;
let monsterHP = 100;
let playerHP = 100;
const monsterDmg = 20;
const playerDmg = 30;
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
function playerDamageCalculation(equipment) {
    const playerWeapon = playerEquipment[0].weaponDmg;
}
function game(action) {
    if (playerActions === "Attack") {
    }
}
console.log(playerEquipment[0].weaponDmg);
