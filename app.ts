type StringOrNumber = string | number;

function add1(value: StringOrNumber): StringOrNumber {
  if (typeof value === "string") {
    return value + "1";
  } else {
    return value + 1;
  }
}

console.log(add1("2"));

/////////////////

class Dog {
  name: string;
  color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

class Cat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function getName(animal: Cat | Dog) {
  if (animal instanceof Cat) {
    console.log("The name of the Cat is ", animal.name);
  } else {
    console.log(
      "The name of the Dog is ",
      animal.name,
      "and the color of it is ",
      animal.color
    );
  }
}

const dog = new Dog("Nicolo", "Black");

getName(dog);
