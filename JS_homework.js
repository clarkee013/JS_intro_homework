// Episode 1
var name = 'Slim Shady';

var printName = function() {
  console.log('Hi! My name is', name);
};

printName();

// will print out - Hi! My name is Slim Shady as it takes the variable name and then the string in the function.

//Episode 2 

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// Will print out the score as 3 as the global variable is superceeded by the local variable.

// Episode 3
var myAnimals = ['chickens', 'cats', 'rabbits'];

var listAnimals = function() {
  myAnimals = ['ducks', 'dogs', 'lions'];
  for(var i=0; i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// will print out a number plus the corresponding animal from the array, global variable superceeded by the local variable.

//Episode 4
var suspectOne = 'Alan';
var suspectTwo = 'Steve';
var suspectThree = 'John';
var suspectFour = 'Ally';

var allSuspects = function() {
  var suspectThree = 'Adam'
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// will print out adam as suspect 3 in the suspects to include but will print out john as is listed in the global list which the last console.log is looking at as its not within the method.

//Epsiode 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// Will print out Poirot as the detective name as that has been assigned in the last function to be the local variable but takes the name method call from the printName one.

//Episode 6
var murderer = 'John';

var outerFunction = function() {
  var murderer = 'Ally';

  var innerFunction = function() {
    murderer = 'Steve';
  }

  innerFunction();
}

outerFunction();
console.log('The murderer is', murderer);

// prints out Steve as the murderer as the innerfunction is part of the outer function method, outfunction method is then called on outside of {}'s before the console.out.'






