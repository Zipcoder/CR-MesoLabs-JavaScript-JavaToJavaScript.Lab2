'use strict'
class Pet {
  constructor (name, type) {
    this.name = name
    this.type = type
  }
  getName () {
    return this.name
  }
  setName (name) {
    this.name = name
  }
  speak () {
    return this.name + 'is a' + this.type
  }
}

class Cat extends Pet {
  constructor (name) {
    super(name, 'cat')
  }
  speak () {
    return 'meeoow'
  }
}

class Dog extends Pet {
  constructor (name) {
    super(name, 'dog')
  }
  speak () {
    return 'wooof'
  }
}

class Bird extends Pet {
  constructor (name) {
    super(name, 'bird')
  }
  speak () {
    return 'chirp'
  }
}

function definePet (name, type) {
  switch (type.toLowerCase()) {
    case 'dog':
      return new Dog(name)
    case 'cat':
      return new Cat(name)
    case 'bird':
      return new Bird(name)
    default:
      return new Pet(name, type)
  }
}

function PetChat () {
  var display = document.getElementById('display')
  var numPets = null

  var askHowMany = function () {
    return window.prompt('How many pets do you have?')
  }

  var askPetInfo = function () {
    display.innerHTML += '<ul>'
    for (var i = 0; i < numPets; i++) {
      var type = window.prompt('What is pet #' + (i + 1) + '? (cat, dog, bird)')
      var name = window.prompt('What is pet #' + (i + 1) + '\'s name\'?')
      const animal = definePet(name, type)
      var textOut = '<li>' + animal.getName() + ' says ' + animal.speak() + '</li>'
      display.innerHTML += textOut
    }
    display.innerHTML += '</ul>'
  }

  this.init = function () {
    while (numPets === null) {
      numPets = askHowMany()
    }
    askPetInfo()
  }
}

var chat = new PetChat()
chat.init()
