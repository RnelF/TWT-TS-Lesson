"use strict";
class Dog {
    constructor(name) {
        Dog.instanceCount++;
        this.name = name;
    }
    static decreaseCount() {
        this.instanceCount--;
    }
}
Dog.instanceCount = 0;
const dog1 = new Dog("Browny");
console.log(Dog.instanceCount);
const dog2 = new Dog("Blacky");
console.log(Dog.instanceCount);
Dog.decreaseCount();
console.log(Dog.instanceCount);
