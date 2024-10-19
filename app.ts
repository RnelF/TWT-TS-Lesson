let monsterHP: number = 100;
let playerHP: number = 100;

interface Monster {
  monsterName: string;
  monsterLvl: number;
  monsterDmg: number;
  monsterDef: number;
  monsterEvasion: number;
  monsterAgi: number;
  monsterHP: number;
}

const monster: Monster[] = [
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

function monsterFighting(): number {
  const randomNumber: number = Math.floor(Math.random() * monster.length);
  return randomNumber;
}

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
const playerDamage = playerEquipment[0].weaponDmg / 2;

function playerDamagetoMonsterCalculation(): number {
  const monsterHealth = randomMonster.monsterHP;

  return monsterHealth - playerDamage;
}

let randomMonster = monster[monsterFighting()];

function game(action: "Attack" | "Block" | "Run"): void {
  monsterFighting();
  const monster = randomMonster.monsterName;
  randomMonster.monsterHP = playerDamagetoMonsterCalculation();
  if (action === "Attack") {
    playerDamagetoMonsterCalculation();
    return console.log(
      `you Attacked ${monster} and inflicted ${playerDamage}! the Current monster HP is ${randomMonster.monsterHP}`
    );
  } else if (action === "Run") {
    return console.log("You Run");
  } else if (action === "Block") {
    return console.log(`You will block the monster's next Attack`);
  }
}

game("Attack");
