" use strict ";

var display = document.getElementById("display");

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return this.name + ' makes a noise.';
    }
    getName(){
      return this.name;
    }
}

class Dog extends Animal {
    speak() {
        return ' barks';
    }
}
class Cat extends Animal {
    speak() {
        return ' meow';
    }
}

class Cow extends Animal {
    speak() {
        return ' moo';
    }
}
var numberOfPets = prompt("How many pets do you have?");
var petStorage = [];
var typeOfPet = "";
var nameOfPet = "";


for (var i = 0; i < numberOfPets; i++) {
    typeOfPet = prompt("Enter Type of Pet (Dog/Cat/Cow)");
    nameOfPet = prompt("Enter Pet Name");
    if (typeOfPet == "Dog") {
        petStorage.push(new Dog(nameOfPet));
    } else if (typeOfPet == "Cat") {
        petStorage.push(new Cat(nameOfPet));
    } else if (typeOfPet == "Cow") {
        petStorage.push(new Cow(nameOfPet));
    }
}

petStorage.forEach(listPetDetails);

function listPetDetails(pet) {
    display.innerHTML += "Pet " + "'s name is " + pet.getName() + ". Pet says " + pet.speak() + "!<br>";
}
