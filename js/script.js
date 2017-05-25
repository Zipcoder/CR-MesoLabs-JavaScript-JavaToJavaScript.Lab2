" use strict ";

var display = document.getElementById("display");

function inquiry(){
  var petList = [];
  var numberOfPets = prompt("Hello, how many pets do you have?").toLowerCase();
  var i = 0;
  while (i < numberOfPets){

    var nameOfPet = prompt("What is your pet's name?").toLowerCase();
    var typeOfPet = prompt("What kind of pet is " + nameOfPet + "?").toLowerCase();

      if (typeOfPet === "dog"){
        petList.push(new Dogs(nameOfPet));

      } else if(typeOfPet === "cat"){
        petList.push(new Cats(nameOfPet));

      } else if(typeOfPet === "bird"){
        petList.push(new Birds(nameOfPet));

      } else {
        petList.push(new Pets(nameOfPet));
      }
      i++;
  }

  for (var j =0; j< petList.length; j++){
    display.innerHTML += petList[j].getName() + ". " + petList[j].speak() + "<br>";

  }

}

class Pets {
  constructor(name){
    this.name = name;
  }
  getName(){
    return "My name is " + this.name;
  }
  speak(){
    return "Hi, I am just a generic type pet."
  }
}

class Dogs extends Pets{
  constructor(name){
    super(name);
  }
  speak(){
    return "Woof! Woof!";
  }
}

class Cats extends Pets{
  constructor(name){
    super(name);
  }
  speak(){
    return "Meaooo~~!";
  }
}

class Birds extends Pets{
  constructor(name){
    super(name);
  }
  speak(){
    return "What are you looking at!?";
  }
}
