" use strict ";

class Pet {
  constructor(name) { ///,type
    this.name = name;
    //this.type = type;
  }
  getName(){
    return this.name;
  }

  setName(){
    this.name = name;
  }

  speak(){

  }
}
class Cat extends Pet {
  constructor(name) {
    super(name);
  }
  speak(){
    return "Meow.";
  }
}
class Dog extends Pet {
  constructor(name) {
    super(name);
  }
  speak(){
    return "Bjorke!";
  }
}
class Bird extends Pet {
  constructor(name) {
    super(name);
  }
  speak(){
    return "SCREEEEECHHH!!!111";
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
      var textOut = type + " " + name + "<br />";
      //display.innerHTML += textOut;

      if (type.toLowerCase() === "cat") {
        var cat = new Cat(name);
        textOut += "Your " + type + ", " + name + ", says " + cat.speak() + "<br/>";
      }

      else if(type.toLowerCase() === "dog") {
        var dog = new Dog(name);
        textOut += "Your " + type + ", " + name + ", says " + dog.speak() + "<br/>";
      }

      else if(type.toLowerCase() === "bird") {
        var bird = new Bird(name);
        textOut += "Your " + type + ", " + name + ", says " + bird.speak() + "<br/>";
      }
      display.innerHTML += textOut;
      //display.innerHTML += "Your " + type + ", " + pet.getName() + "," " says " + pet.speak() + "<br/>";
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  };
}

var chat = new PetChat();
chat.init();
