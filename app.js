"use strict";
class Monster {
    constructor(monsterHP, monsterName) {
        this.monsterHP = monsterHP;
        this.monsterName = monsterName;
    }
    monsterDefeated() {
        if (this.monsterHP === 0) {
            console.log(`${this.monsterName}'s  HP is ${this.monsterHP}, ${this.monsterName} Defeated!`);
        }
        else {
            console.log(`${this.monsterName} HP is ${this.monsterHP}`);
        }
    }
}
const monster = new Monster(1, "Rabituzah");
monster.monsterHP = 3;
monster.monsterDefeated();
