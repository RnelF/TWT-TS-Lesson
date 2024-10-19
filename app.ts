let playerActions: "Attack" | "Block" | "Run";
let monsterHP: number = 100;
let playerHP: number = 100;

const monsterDmg: number = 20;
const playerDmg: number = 30;

interface Weapon {
  itemName: string;
  goldCost: number;
  weaponDmg: number;
  weaponDurability: number;
}

const weaponShop: Weapon[] = [
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

const playerEquipment: Weapon[] = [weaponShop[0]];

function playerDamageCalculation(equipment: object[]): number {
  const playerWeapon: number = playerEquipment[0].weaponDmg;
}

function game(action: string): string {
  if (playerActions === "Attack") {
  }
}

console.log(playerEquipment[0].weaponDmg);
