" use strict ";
var display = document.getElementById('display');


class Pet{
  constructor(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  setName(newName){
    this.name= newName;
  }
  speak(){
    return "hello human!";
  }

}

class Dog extends Pet{
  constructor(name){
    super(name);
  }

 speak(){
    return "woof!";
  }
}

class Cat extends Pet{
  constructor(name){
    super(name);
  }
  speak(){
    return"meow!";
  }
}

class Fish extends Pet{
  constructor(name){
    super(name);
  }
  speak(){
    return "glub glub";
  }
}

var petCollection = [];
var typeOfPet= "";
var nameOfPet= "";
var numberOfPets= prompt("How many pets do you have?");

for(var i=0;i<numberOfPets;i++){
  typeOfPet= prompt("Enter Type of Pet Cat/Dog/Fish");
  nameOfPet=prompt("Enter Pet Name");
    if(typeOfPet== "Cat"){
      petCollection.push(new Cat(nameOfPet));
    }else if (typeOfPet=="Dog"){
      petCollection.push(new Dog(nameOfPet));
    }else if (typeOfPet=="Fish"){
      petCollection.push(new Fish(nameOfPet));
    }
    else {
      petCollection.push(new Pet(nameOfPet));
    }
}

petCollection.forEach(displayPetInformation);
function displayPetInformation(pet){
  display.innerHTML+= "Pet's name is "+ pet.getName()+ ". Pet says " + pet.speak()+ "<br>";
}
