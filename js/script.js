" use strict ";
console.log("HEllo");

var cat = {
  speak: function(){
    return "Meow";
  }
};

var dog = {
  speak: function(){
    return "Woof";
  }
};

var bird = {
  speak: function(){
    return "Tweet";
  }
};


function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){

    var talk;
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");

      if(type.toUpperCase() === "CAT"){
        talk = cat.speak();
      }

      if(type.toUpperCase() === "DOG"){
        talk = dog.speak();
      }

      if(type.toUpperCase() === "BIRD"){
        talk = bird.speak();
      }
      var textOut = type + " " + name + " goes " + talk + "<br />";



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
