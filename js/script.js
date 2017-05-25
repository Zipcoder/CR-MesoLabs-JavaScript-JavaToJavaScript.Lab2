" use strict ";


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
	  return "rrrrr";
  }

}

class Dog extends Pet
{
  speak()
  {
    console.log('bark');
	  return "bark";
  }
}

class Cat extends Pet
{
  speak()
  {
    console.log('meow');
	  return "meow";
  }
}

class Bird extends Pet
{
  speak()
  {
    console.log("chirp");
	  return "chirp";
  }
}


function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
	  var petList = new Array();
	  var myPet;
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
		if(type === "cat")
		{
			 myPet = new Cat(name);
			petList.push(myPet);
		}
		else if(type === "dog")
		{
			myPet = new Dog(name);
			petList.push(myPet);
		}
		else if(type === "bird")
		{
			  myPet = new Bird(name);
			petList.push(myPet);
		}
		
      var textOut = petList[i].name + " " + petList[i].speak() + "<br />";
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


