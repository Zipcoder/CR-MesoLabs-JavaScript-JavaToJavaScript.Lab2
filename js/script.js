" use strict ";

function PetChat(){
  askPetInfo();
  var display = document.getElementById('display');
  var numPets = null;

}

class Pet {
  constructor(name){
    this.name = name;
  }
  speak(){
    return this.name + " is a " + this.type + " and makes a noise";
  }
  getName(){
    return this.name;
  }
  setName(){
    return this.name;
  }
}
class Dog extends Pet {
  constructor(name){
  super(name);
}
  speak(){
    return "ruffff rarrrr barrrkkkk.";
  }
}
class Cat extends Pet {
  constructor(name){
  super(name);
}
  speak(){
    return "meeeooowwww.";
  }
}
class Fish extends Pet {
  constructor(name){
  super(name);
}
  speak(){
    return "bubble bubble bubble!.";
  }
}

var askPetInfo = function(){
  var result = "";
   for(var i=0; i < numPets; i++){
     var type = prompt("What kind of pet is pet " + (i+1) + "? (dog, cat, fish would be good picks)");
     var name = prompt("What do you call pet" + (i+1));

      if (type == "dog") {
        var dog = new Dog(name);
        var textOutput = dog.getName() + " is a  " + this.type + " that says " + dog.speak() + "<br />";
      }
      else if (type == "cat") {
        var cat = new Cat(name);
        var textOutput = cat.getName() + " the " + this.type + " that says " + cat.speak() + "<br />";
      }
      else {
        var fish = new Fish(name);
        var textOutput = fish.getName() + " the " + this.type + " that says " + fish.speak() + "<br />";
      }
   }
   result += textOutput;
   return result;
 }
