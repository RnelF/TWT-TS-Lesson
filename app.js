"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello! my name is ${this.name}`);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        if (name.length < 5)
            return;
        return (this.name = name);
    }
}
const p1 = new Person("Arnel");
console.log(p1.setName("Tinay"));
