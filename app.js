"use strict";
var animalActions;
(function (animalActions) {
    animalActions["Run"] = "Runs";
    animalActions["Jump"] = "Jumps";
    animalActions["Lay"] = "Layed Down";
})(animalActions || (animalActions = {}));
class Animal {
    move(duration, act) {
        console.log("Moving along...");
        this.makeSound(duration);
        this.makeAnotherSound(duration);
        this.doAnAction(act);
    }
}
class Dog extends Animal {
    makeSound(duration) {
        console.log("Woof Woof");
    }
    makeAnotherSound(duration) {
        console.log("Grrrrrrrrr");
    }
    doAnAction(act) {
        if (act === animalActions.Jump) {
            console.log(`The Dog ${act}`);
        }
        else if (act === animalActions.Run) {
            console.log(`The Dog ${act}`);
        }
        else if (act === animalActions.Lay) {
            console.log(`The Dog ${act}`);
        }
    }
}
class Cow extends Animal {
    makeSound(duration) {
        console.log("Moo Moo");
    }
    makeAnotherSound(duration) {
        console.log("Thud Thud");
    }
    doAnAction(act) {
        if (act === animalActions.Jump) {
            console.log(`The Cow ${act}`);
        }
        else if (act === animalActions.Run) {
            console.log(`The Cow ${act}`);
        }
        else if (act === animalActions.Lay) {
            console.log(`The Cow ${act}`);
        }
    }
}
const dog = new Dog();
const cow = new Cow();
cow.move(10, animalActions.Jump);
