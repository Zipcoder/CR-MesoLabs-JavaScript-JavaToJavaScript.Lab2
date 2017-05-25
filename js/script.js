" use strict ";

var display = document.getElementById("display");
var numPets;
var species;
var nameOfPet;
var doggie;
var pet;

class Pet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.noise = "default noise";
  }
  speak() {
    return "Your " + this.species + ", " + this. name + ", says \"" + this.noise + ".\"";
  }
}

class Dog extends Pet {
  constructor(name) {
    super(name, "Dog");
    this.noise = "Grrrrrr!";
  }
  speak() {
    return "Your dog, " + this.name + ", says " + this.noise + ".\"";
  }
}

function getNumberOfPets() {
  doggie = new Dog("Killer");
  pet = new Pet("Juniper", "ferret");
  return pet.speak() + "<br/>" + doggie.speak();


}
var noise = getNumberOfPets();
display.innerHTML = noise;
