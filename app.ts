let playerActions: "Attack" | "Block" | "Run";
let monsterHP: number = 100;
let playerHP: number = 100;

const monsterDmg: number = 20;
const playerDmg: number = 30;

const weaponShop: object[] = [
  {
    itemName: "Sword",
    goldCost: 10,
    weaponDmg: 15,
    weaponDurability: 60
  },
  {
    itemName: "Dagger",
    goldCost: 15,
    weaponDmg: 13,
    weaponDurability: 70
  },
  {
    itemName: "Katana",
    goldCost: 20,
    weaponDmg: 17,
    weaponDurability: 80
  }
]

const playerEquipments: object[] = [weaponShop[0]]

const game = (action: string):string{
  if (playerActions === "Attack"){

  }
}