class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello!, My Name is ${this.name}`);
  }
}

class Employee extends Person {
  callMe() {
    console.log(`Hello ${this.name}`);
  }
}

const p1 = new Employee("Arnel");

p1.callMe();
