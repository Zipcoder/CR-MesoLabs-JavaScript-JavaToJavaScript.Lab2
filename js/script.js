" use strict ";
var askPetType = prompt("Hey, what kinda pet you got?");
switch(askPetType.toLowerCase()){
  case "dog":
  //TODO create new dog object
  alert("You chose dog");
  break;
  case "cat":
  //TODO create new cat object
  alert("You chose cat");
  break;
  case "fish":
  //TODO create new fish object
  alert("You chose fish");
  break;
  default:
  alert("You chose...poorly..try cat, fish, or dog next time");
}

class Pet {
  constructor(name){
    this.name = name;
  }
  speak(){
    alert(this.name + " is a " + this.type + " and makes a noise");
  }
  getName(){
    return this.name;
  }
  setName(){
    return this.name;
  }
}
class Dog extends Pet {

  speak(){
    alert(this.name + " is a dog and barks, all the damn time.");
  }
}
class Cat extends Pet {
  speak(){
    alert(this.name + " is a cat and meows a lot.");
  }
}
class Fish extends Pet {
  speak(){
    alert(this.name + " is a fish and blows bubbles.");
  }
}
