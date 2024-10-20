interface Animal {
  speak(): void;
}

class Dog implements Animal {
  private name: string;
  private color: string;

  constructor(name: string, color: string) {
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

class Cat implements Animal {
  speak() {
    console.log("Meow");
  }
}

const dog = new Dog("Blacky", "Black");
const cat = new Cat();
const animals: Animal[] = [dog, cat];

function makeSound(animal: Animal) {
  animal.speak();
}

makeSound(cat);
