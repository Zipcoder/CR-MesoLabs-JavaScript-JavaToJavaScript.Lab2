" use strict ";

var display = document.getElementById("display");

class Pet{
    constructor(name, animalType){
        this.name = name;
        this.animalType = animalType;  
    }  
    
    speak(){
        return "Sound";
    }
}

class Dog extends Pet{
    constructor(name, animalType){
        super(name, animalType);
    }
    
     speak(){
        return "woof!";
    }
}

class Cat extends Pet{
    constructor(name, animalType){
        super(name, animalType);
    }
    
      speak(){
        return "meow!";
    }
}

class Bird extends Pet{
    constructor(name, animalType){
        super(name, animalType);
    }
    
      speak(){
        return "chirp!";
    }
}


function askAboutPets(){
var numberOfPets = prompt("How many pets do you have");
var petInfoList = [];

for(var i =0; i<numberOfPets; i++){
    
    var name = prompt("What is your pet's name?");
    var animalType = prompt("What type is your pet?");
    
    if(animalType == "Bird"){
        petInfoList.push(new Bird(name, animalType));
    }else if(animalType == "Dog"){
        petInfoList.push(new Dog(name, animalType));
    } else if (animalType == "Cat"){
        petInfoList.push(new Cat(name, animalType));
    } else {
        petInfoList.push(new Pet(name, animalType));
    }
}

    petInfoList.forEach(listAllPets);
      
}
                        
function listAllPets(pet){
    
    display.innerHTML += "Name: " + pet.name + " Type: " + pet.animalType +  " Sound: " + pet.speak() + "<br>";
        
    }                        

