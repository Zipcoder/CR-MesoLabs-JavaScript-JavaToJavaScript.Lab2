" use strict ";

function PetQuestions(){
  var display = document.getElementById("display");
  var numPets = null;
  var listOfPets = [];
  
  function PetGen() {
    this.createPet = function (petName, petType) {
      var pet;
      
      if (petType === "cat")
        pet = new Cat(petName);
      if (petType === "dog")
        pet = new Dog(petName);
      if (petType === "bird")
        pet = new Bird(petName)
    
      return pet;
    }
  }

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    var textOut = "";
    var petGen = new PetGen();
    
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var pet = petGen.createPet(name, type);
      listOfPets.push(pet);
      textOut += pet.name + " " + pet.speak() + "<br />";
      }
      display.innerHTML = textOut;
    };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
  
  class Pet {
    constructor(n) {
      this.name = n;
    }
    
    get name() {
      return name;
    }
    
    set name (petName) {
      name = petName;
    }
    
    speak() {
      return "I am pet";
    }
  }
  
  class Dog extends Pet {
    speak() {
      return "woof";
    }
  }
  
  class Cat extends Pet {
    speak() {
      return "meow";
    }
  }
  
  class Bird extends Pet {
    speak() {
      return "chirp";
    }
  }
};

var chat = new PetQuestions();
chat.init();
