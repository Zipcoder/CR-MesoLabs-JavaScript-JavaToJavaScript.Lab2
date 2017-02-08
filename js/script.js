'use strict';
class Pet {
  //var name;
  constructor(name){
    this.name = name;
  }
  //get name(){ return this.name;}
  //set name(name){this.name = name;}
  speak (){}
}

class Cat extends Pet {
  speak(){
    return "Meow!"
  }
}

class Dog extends Pet {
   speak() {
    return "Woof Woof!"
  }
}

class Bird extends Pet {
  speak() {
    return "Tweet Tweet Motherfucker!"
  }
}


function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  }

  var pet = new Pet();

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      if (type === "cat"){
        pet = new Cat(name);
      }
      else if(type === "dog"){
        pet = new Dog(name);
      }
      else if(type === "bird") {
        pet = new Bird(name);
      }

      display.innerHTML += type + " " + pet.name + " " + pet.speak() +"<br />";

      }
      //var textOut = type + " " + name + "<br />";
    }


  this.init = function(){
    console.log("hello");
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
}

var chat = new PetChat();
chat.init();
