console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var middle_earth = document.createElement('section');

  middle_earth.setAttribute('id', 'middle-earth');

  for (var i=0; i < lands.length; i++) {
    var land =document.createElement('article');
    var heading = document.createElement('h1');
    heading.textContent=lands[i];
    land.appendChild(heading);
    middle_earth.appendChild(land);
  }

document.body.appendChild(middle_earth);
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var list = document.createElement('ul');

  list.innerHTML = (
  "<ul>" + "<li class='hobbit'>" + hobbits[0] + "</li>" + "<li class='hobbit'>" + hobbits[1] + "</li>" + "<li class='hobbit'>" + hobbits[2] + "</li>" + "<li class='hobbit'>" + hobbits[3] + "</li>" + "</ul>" 
);

  var shire = document.querySelector('article');

  shire.appendChild(list);
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  var the_ring = document.createElement('div');

  the_ring.setAttribute('class', 'magic-imbued-jewelry');
  the_ring.setAttribute('id', 'the-ring');


   the_ring.addEventListener("click", nazgulScreech); 

  var article = 'the ring';

  document.querySelector("li").appendChild(the_ring);

  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {

 var aside = document.createElement('aside');

 var list = document.createElement('ul');

  list.innerHTML = ( 
  "<ul>" + "<li class='hobbit'>" + buddies[0] + "</li>" + "<li class='hobbit'>" + buddies[1] + "</li>" + "<li class='hobbit'>" + buddies[2] + "</li>" + "<li class='hobbit'>" + buddies[3] + "</li>" +
"</ul>" 
);

  var rivendell = document.querySelectorAll('article')[1];


  rivendell.appendChild(aside);
  aside.appendChild(list);

  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
   var rivendell = document.querySelectorAll("article")[1];
    var li = rivendell.querySelectorAll("li")[3];
    li.innerText = "Aragorn";

}

beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  var the_fellowship = document.createElement('div');
 window.alert("They have joined you!");
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();
// Part 8


function theBalrog() {
    node.Gandalf="Gandalf_the_White";

    Gandalf_the_White.style.backround="white";

    Gandalf_the_White.style.border="grey";
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  window.alert("The horn of gondor has been blown!");
  Fellowship.removeChild('Boromir');
}
hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone();
// Part 11

function weWantsIt() {

  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

weWantsIt();
// Part 12

function thereAndBackAgain() {
  
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
thereAndBackAgain();