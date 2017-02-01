" use strict ";

var dog = {
  speak: function () {
    return "woof";
  }
};

var cat = {
  speak: function () {
    return "meow";
  }
};

var dino = {
  speak: function () {
    return "roar";
  }
};

var pet = {
  speak: function () {
    return "hello";
  }
};


function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var sound = pet.speak();
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, dino)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      if (type.toLowerCase() === "dog") {
        sound = dog.speak();
      }
      if (type.toLowerCase() === "cat") {
        sound = cat.speak();
      }
      if (type.toLowerCase() === "dino") {
        sound = dino.speak();
      }
      var textOut = "My name is " + name + " and I make sounds like " + sound + "." + "<br />";
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
