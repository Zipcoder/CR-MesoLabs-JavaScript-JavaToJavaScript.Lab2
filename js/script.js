" use strict ";

var display = document.getElementById("display");

class Animal {
    constructor(name) {
        this._name = name;
    }
    speak() {
        return this._name + ' makes a noise.';
    }
    get name(){
      return this._name;
    }
}

class Dog extends Animal {
    speak() {
        return this._name + ' barks.';
    }
}
class Cat extends Animal {
    speak() {
        return this._name + ' meow.';
    }
}

class Cow extends Animal {
    speak() {
        return  this._name + ' moos.';
    }
}
var numberOfPets = prompt("How many pets do you have?");
var petStorage = [];
var typeOfPet = "";
var nameOfPet = "";

for (var i = 0; i < numberOfPets; i++) {
    typeOfPet = prompt("Enter Type of Pet (Dog/Cat/Bird/Pig)");
    nameOfPet = prompt("Enter Pet Name");
    if (typeOfPet == "Dog") {
        petStorage.push(new Dog(name));
    } else if (typeOfPet == "Cat") {
        petStorage.push(new Cat(name));
    } else if (typeOfPet == "Bird") {
        petStorage.push(new Bird(name));
    } else if (typeOfPet == "Pig") {
        petStorage.push(new Pig(name));
    }
}

petStorage.forEach(listPetDetails)

function listPetDetails(pet, index) {
    display.innerHTML += "Pet " + (index+1) + "'s name is " + pet.getName() + ". Pet Says " + pet.speak() + "!<br>";
}
