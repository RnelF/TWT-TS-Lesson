enum animalActions {
  "Run" = "Runs",
  "Jump" = "Jumps",
  "Lay" = "Layed Down",
}

abstract class Animal {
  abstract makeSound(duration: number): void;
  abstract makeAnotherSound(duration: number): void;
  abstract doAnAction(act: animalActions): void;

  move(duration: number, act: animalActions) {
    console.log("Moving along...");
    this.makeSound(duration);
    this.makeAnotherSound(duration);
    this.doAnAction(act);
  }
}

class Dog extends Animal {
  makeSound(duration: number): void {
    console.log("Woof Woof");
  }
  makeAnotherSound(duration: number): void {
    console.log("Grrrrrrrrr");
  }
  doAnAction(act: animalActions): void {
    if (act === animalActions.Jump) {
      console.log(`The Dog ${act}`);
    } else if (act === animalActions.Run) {
      console.log(`The Dog ${act}`);
    } else if (act === animalActions.Lay) {
      console.log(`The Dog ${act}`);
    }
  }
}

class Cow extends Animal {
  makeSound(duration: number): void {
    console.log("Moo Moo");
  }

  makeAnotherSound(duration: number): void {
    console.log("Thud Thud");
  }
  doAnAction(act: animalActions): void {
    if (act === animalActions.Jump) {
      console.log(`The Cow ${act}`);
    } else if (act === animalActions.Run) {
      console.log(`The Cow ${act}`);
    } else if (act === animalActions.Lay) {
      console.log(`The Cow ${act}`);
    }
  }
}

const dog = new Dog();
const cow = new Cow();

cow.move(10, animalActions.Jump);
