" use strict ";

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
      display.innerHTML += textOut;

      if (type.toLowerCase() == "cat"){
        pet = new Cat(name);
        
      }

      else if(type.toLowerCase() == "dog"){
        pet = new Dog(name);
      }

      else if(type.toLowerCase() == "bird"){
        pet = new Bird(name);
      }
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

class Pet {
  constructor(name) { ///,type
    this.name = name;
    //this.type = type;
  }
  getName(){
    return this.name;
  }

  // setName(){
  //   this.name = name;
  // }

  speak(){

  }
}
class Cat extends Pet {
  constructor(name) {
    super(name);
  }
  //super(name);
  speak(){
    return "Meow.";
  }
}
class Dog extends Pet {
  constructor(name) {
    super(name);
  }
  //super(name);
  speak(){
    return "Bjorke!";
  }
}
class Bird extends Pet {
  constructor(name) {
    super(name);
  }
  //super(name);
  speak(){
    return "SCREEEEECHHH!!!111";
  }
}
