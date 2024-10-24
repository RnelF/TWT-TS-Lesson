"use strict";
function add1(value) {
    if (typeof value === "string") {
        return value + "1";
    }
    else {
        return value + 1;
    }
}
console.log(add1("2"));
/////////////////
class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
class Cat {
    constructor(name) {
        this.name = name;
    }
}
function getName(animal) {
    if (animal instanceof Cat) {
        console.log("The name of the Cat is ", animal.name);
    }
    else {
        console.log("The name of the Dog is ", animal.name, "and the color of it is ", animal.color);
    }
}
const dog = new Dog("Nicolo", "Black");
getName(dog);
