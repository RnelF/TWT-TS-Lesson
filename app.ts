class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! my name is ${this.name}`);
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    if (name.length < 5) return;

    return (this.name = name);
  }
}

const p1 = new Person("Arnel");

console.log(p1.setName("Tinay"));
