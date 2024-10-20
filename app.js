"use strict";
class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        console.log(`I am ${this.name} and I am ${this.color}`);
    }
    test() {
        return 1;
    }
}
class Cat {
    speak() {
        console.log("Meow");
    }
}
const dog = new Dog("Blacky", "Black");
const cat = new Cat();
const animals = [dog, cat];
function makeSound(animal) {
    animal.speak();
}
makeSound(cat);
