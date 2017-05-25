" use strict ";



class Pet {

    constructor(petName, petType) {
        this.petName = petName;
        this.petType = petType;
    }
    speak() {
        return "...I speak English";
    }
}

class Dog extends Pet {
    constructor(petName, petType) {
        super(petName, "Dog")
    }
    speak() {
        super.speak();
        return "*Ruff*";

    }
}

class Cat extends Pet {
    constructor(petName, petType) {
        super(petName, "Cat")
    }
    speak() {
        super.speak();
        return "*Meow*";

    }
}

class Bird extends Pet {
    constructor(petName, petType) {
        super(petName, "Bird")
    }
    speak() {
        super.speak();
        return "*Chirp*";

    }
}


function PetChat() {
    var display = document.getElementById("display");
    var numPets = null;
    var pet = new Pet();
    var dog = new Dog();
    var cat = new Cat();
    var bird = new Bird();

    var askHowMany = function () {
        // console.log("How many pets do you have?");
        return prompt("How many pets do you have?");
    };

    var askPetInfo = function () {
        for (var i = 0; i < numPets; i++) {
            var type = prompt("What is pet #" + (i + 1) + "? (cat, dog, bird)");

            var name = prompt("What is pet #" + (i + 1) + "'s name'?");

            if (type.toLowerCase() == "dog") {
                pet = new Dog(name, type)
                display.innerHTML += "You have a " + dog.petType + " named " + pet.petName[i].charAt(0).toUpperCase() + pet.petName.slice(1) + " " + dog.speak() + "<br>";
            } else if (type.toLowerCase() == "cat") {
                pet = new Cat(name, type)
                display.innerHTML += "You have a " + cat.petType + " named " + pet.petName[i].charAt(0).toUpperCase() + pet.petName.slice(1) + " " + cat.speak() + "<br>";
            } else if (type.toLowerCase() == "bird") {
                pet = new Bird(name, type)
                display.innerHTML += "You have a " + bird.petType + " named " + pet.petName[i].charAt(0).toUpperCase() + pet.petName.slice(1) + " " + bird.speak() + "<br>";
            } else {
                display.innerHTML += "You have a " + type + " named " + name[i].charAt(0).toUpperCase() + name.slice(1) + " " + pet.speak() + "<br>";
            }

        }
    };

    this.init = function () {
        while (numPets === null) {
            numPets = askHowMany();
        }

        askPetInfo();
    }
};

var chat = new PetChat();
chat.init();
