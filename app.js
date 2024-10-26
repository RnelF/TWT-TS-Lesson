"use strict";
function Animal(animal) {
    if ("specie" in animal) {
        console.log(`The Birds name is ${animal.name} it's a ${animal.specie} specie that is endemic to ${animal.country} the birds color is ${animal.color}`);
    }
    else {
        console.log(`The Dog's name is ${animal.name} its a ${animal.breed} and its color is ${animal.color}`);
    }
}
const bird = {
    name: "Adarna",
    specie: "Mythical",
    color: "Rainbow",
    country: "Biringan",
};
Animal(bird);
