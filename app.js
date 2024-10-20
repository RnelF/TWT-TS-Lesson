"use strict";
class Person {
    constructor(name) {
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
