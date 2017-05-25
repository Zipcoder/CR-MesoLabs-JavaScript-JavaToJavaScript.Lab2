" use strict ";

var display = document.getElementById("display");
var numPets;
var species;
var nameOfPet;
var doggie;
var pet;
var kitty;
var ferret;

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

class Cat extends Pet {
  constructor(name) {
    super(name, "Cat");
    this.noise = "Rowwlll!!";
  }
  speak() {
    return "Your cat, " + this.name + ", says " + this.noise + ".\"";
  }
}

class Ferret extends Pet {
  constructor(name) {
    super(name, "Ferret");
    this.noise = "Dook!";
  }
  speak() {
    return "Your ferret, " + this.name + ", says " + this.noise + ".\"";
  }
}

function getNumberOfPets() {
  doggie = new Dog("Killer");
  pet = new Pet("Default name", "Default pet type");
  kitty = new Cat("Mauler");
  ferret = new Ferret("Andromeda");
  return pet.speak() + "<br/>" + doggie.speak() + "<br/>" + kitty.speak() + "<br/>" + ferret.speak();
}
var noise = getNumberOfPets();
display.innerHTML = noise;
