"use strict";
class Animal {
    move(duration) {
        console.log("Moving along...");
        this.makeSound(duration);
    }
}
class Dog extends Animal {
    makeSound(duration) {
        console.log("Woof Woof");
    }
}
const dog = new Dog();
dog.move(10);
