class Monster<T, N> {
  monsterName: N;
  monsterHP: T;

  constructor(monsterHP: T, monsterName: N) {
    this.monsterHP = monsterHP;

    this.monsterName = monsterName;
  }

  monsterDefeated(): void {
    if (this.monsterHP === 0) {
      console.log(
        `${this.monsterName}'s  HP is ${this.monsterHP}, ${this.monsterName} Defeated!`
      );
    } else {
      console.log(`${this.monsterName} HP is ${this.monsterHP}`);
    }
  }
}

const monster = new Monster<number, string>(1, "Rabituzah");

monster.monsterHP = 3;

monster.monsterDefeated();
