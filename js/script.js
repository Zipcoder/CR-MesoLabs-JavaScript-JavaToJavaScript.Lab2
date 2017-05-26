" use strict ";

var display = document.getElementById("display");
var numPets;
var species;
var nameOfPet;
var petListString = "";

class Pet {
  constructor(species) {
    this.species = species;
    this.noise = "default noise";
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  speak() {
    return "Your " + this.species + ", " + this. name + ", says \"" + this.noise + ".\"";
  }
}

class Dog extends Pet {
  constructor() {
    super("Dog");
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
  numPets = prompt("How many pets do you have in your menagerie?");
  var menagerie = [];
  for (var i = 0; i < numPets; i++) {
    species = prompt("What is the species of your pet?");
    if ((species == "Dog") || (species == "dog")) {
      menagerie[i] = new Dog();
      nameOfPet = prompt("What is the dog's name?");
      menagerie[i].setName(nameOfPet);
    }
    else if ((species == "Cat") || (species == "cat")) {
      menagerie[i] = new Cat();
      nameOfPet = prompt("What is the cat's name?");
      menagerie[i].setName(nameOfPet);
    }
    else if ((species == "Ferret") || (species == "ferret")) {
      menagerie[i] = new Ferret();
      nameOfPet = prompt("What is the ferret's name?");
      menagerie[i].setName(nameOfPet);
    }
    else {
      menagerie[i] = new Pet(species);
      nameOfPet = prompt("What is your " + species + "'s name?");
      menagerie[i].setName(nameOfPet);
    }
  }


  for (var i = 0; i < menagerie.length; i++) {
    petListString += menagerie[i].speak() + "<br/>";
  }
  return petListString;
}

display.innerHTML = getNumberOfPets();
