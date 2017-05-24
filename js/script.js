" use strict ";

class Pet {
  constructor(name) {
    this.name = name;
  }
  speak() {}
}

class Dog extends Pet {
  constructor(name) {
    super(name);
  }
  speak() {
    return "Woof!"
  }
}

class Cat extends Pet {
  constructor(name) {
    super(name);
  }
  speak() {
    return "Meow!"
  }
}

class Bird extends Pet {
  constructor(name) {
    super(name);
  }
  speak() {
    return "Chirp!"
  }
}

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
      return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      if (type == "dog") {
        var dog = new Dog(name);
        var textOut = dog.name + " the " + type + " says " + dog.speak() + "<br />";
      }
      else if (type == "cat") {
        var cat = new Cat(name);
        var textOut = cat.name + " the " + type + " says " + cat.speak() + "<br />";
      }
      else {
        var bird = new Bird(name);
        var textOut = bird.name + " the " + type + " says " + bird.speak() + "<br />";
      }
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
