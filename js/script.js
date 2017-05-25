" use strict ";

var display = document.getElementById("display");

class Pet {  
    constructor(name) {
        this.name = name;
    }
    speak() {
        return "Growl!";
    }
    
    toString() {
        return this.name + " is a " + this.constructor.name + " and goes " + this.speak();
    }
    
    set name(n) {
        this._name = n;
    }
    
    get name() {
        return this._name;
    }
    
}

class Dog extends Pet {
    speak() {
        return "Woof!";
    }
}

class Cat extends Pet {
    speak() {
        return "Meow!";
    }
}

class Aardvark extends Pet {
    speak() {
        "Pee";
    }
}

function listPets() {
    var pets = getPets();
    
    pets.forEach(function(pet) {
        display.innerHTML += "<p>" + pet.toString() + "</p>";
    })
}


function getPets() {
    var pets = getPetTypes();
    
    pets.forEach(function(pet) {
        pet.name = prompt("What is " + pet.constructor.name + "'s name?");
    })
    return pets;
}

function getPetTypes() {
    var numPets = getnumPets();
    numPets++;
    var petTypes = [];
    
    for (var i = 1; i<numPets; i++) {
        var type = getPetsType(i);
        petTypes.push(getPetObject(type));
    }
    return petTypes;
}

function getnumPets() {
    var numPets = "";
    
    while (!numPets.match(/^[0-9]+/)) {
        numPets = prompt("How many pets do you have?");
    }
    return numPets;
}

function getPetsType(n) {
    var name = "";
    
    while (!name.match(/^[A-Za-z]+/)) {
        name = prompt("What is pet " + n + "'s type?");
    }
    return name;
}

function getPetObject(type) {
    var petObj;
    if (type == "Dog" || type == "dog") {
        petObj = new Dog("");
    } else if (type == "Cat" || type == "cat") {
        petObj = new Cat("");
    } else {
        petObj = new Aardvark("");
    }
    return petObj;
}

listPets();
