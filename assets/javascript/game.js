// function add(a, b) {
//   return a + b;
// }

// var sum = add(2, 3);
// console.log(sum);

var remainingGuess = "9";
var totalWins = "0";
var chosenWord = "";
var wordList = {
  list: [
    "apple",
    "banana",
    "cheese",
    "reading",
    "crayon",
    "homework",
    "pencil",
    "eraser",
    "notebook",
    "backpack",
    "purple",
    "orange",
    "indigo",
    "maroon",
    "schoolbus",
    "recess",
    "holiday"
  ],

  chosenWord: function(list) {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
};

document.onkeyup = function() {
  if (event.which === 32) {
    // Gives "Press the space bar to begin!" 0% opacity
    document.getElementById("Start").style.color = "rgb(0,0,0,0)";
    // var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

    var word = wordList.chosenWord();
    console.log(word);
    for (i = 0; i < word.length; i++) {
      var LetterSpace = document.createElement("div");
      LetterSpace.classList.add("space");
      LetterSpace.setAttribute("data-letter", "word[i]");
      LetterSpace.innerHTML = word[i];
      document.getElementById("spaces").appendChild(LetterSpace);
    }
  }
};

//      Set win counter to 0
//      Set guess counter to 9
// Onkeyup(spacebar) function: Start game {
//    Start game:
//      Randomly pick a word from words list
//      create # of divs matching word length
// }
//
// Onkeyevent() function: Process guess {
//    Test if event key is same as any of the letters of chosen word
//      for (i=0; i < word.length) {
//         if (event.key != word[i]) {
//            i++, append div with event key to guessed letters section
//            guess counter -1
//      }  else if (event,key === word[i]) {
//            append div with event key to guessed letters section
//            edit element.innerHTML[i] with event key
//            guess counter -1
// }};
//
//
//
//
//
//
//
