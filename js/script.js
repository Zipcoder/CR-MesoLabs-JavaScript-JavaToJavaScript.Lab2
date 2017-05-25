" use strict ";


var display = document.getElementById("display");

class Pet {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return "I speak English";
    }
}

Object.defineProperty(Pet, 'name', {
    get: function () {
        return this.name;
    },
    set: function (name) {
        this.name = name;
    }
})

class Cat extends Pet {
    constructor(name) {
        super(name);
    }

    speak() {
        super.speak();
        return "Meow!";
    }
}

class Dog extends Pet {
    constructor(name) {
        super(name);
    }

    speak() {
        super.speak();
        return "Ruff!";
    }
}

class Bird extends Pet {
    constructor(name, greeting) {
        super(name, greeting);
    }

    speak() {
        super.speak();
        return "Tweet!"
    }
}

class Pig extends Pet {
    constructor(name, greeting) {
        super(name, greeting);
    }

    speak() {
        super.speak();
        return "Oink!";
    }
}

var quantity = prompt("How many pets do you have?");
var pets = [];
var type = "";
var name = "";

for (var i = 0; i < quantity; i++) {
    type = prompt("What kind of animal is pet# " + (i + 1) + "?");
    name = prompt("What is pet " + (i + 1) + "'s name?");
    if (type == "Dog") {
        pets.push(new Dog(name));
    } else if (type == "Cat") {
        pets.push(new Cat(name));
    } else if (type == "Bird") {
        pets.push(new Bird(name));
    } else if (type == "Pig") {
        pets.push(new Pig(name));
    }
}

for (var j = 0; j < quantity; j++){
    display.innerHTML += "Pet " + (j + 1) + "'s name is " + pets[j].name + ". Say Hi " + pets[j].name + "!<br>";
    display.innerHTML += pets[j].name + ": " + pets[j].speak() + "<br><br>";
}







