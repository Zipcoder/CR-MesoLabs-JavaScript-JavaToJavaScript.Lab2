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

 class Pet
{
  constructor(name){
    this.name = name;
  }

  get Name(){
    return this.name;
  }

  set Name(name){
    this.name = name;
  }
  speak()
  {
    console.log('rrrrrrrr');
  }

}

class Dog extends Pet
{
  constructor(name)
  {
    super this.name;
  }

  speak()
  {
    console.log('bark');
  }
}

class Cat extends Pet
{
  constructor(name)
  {
    super this.name;
  }

  speak()
  {
    console.log('meow');
  }
}

class Snake extends Pet
{
  constructor(name)
  {
    super this.name;
  }

  speak()
  {
    console.log("ssssssssss");
  }
}
