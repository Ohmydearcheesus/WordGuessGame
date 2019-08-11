// KNOWN ISSUES ---------------------------
// you can just press the same correct letter for the number of times that the word is long and you'll 'win'.
//
//
//
// KNOWN ISSUES ---------------------------

// FUTURE IMPROVEMENTS --------------------
// Animated title "Hangman" before the ready screen
// Key-input automated restart
// Animated hangman stick figure drawing that appears on the left of the word with limbs appearing as guesses are used
// Actual win/loss screens
//
//
//
// FUTURE IMPROVEMENTS --------------------

var GameState = false;
var remainingGuesses = "9";
var totalWins = "0";
var correctGuesses = 0;
var chosenWord = "";
var word = "";
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
    "holiday",
    "hangman"
  ],

  chosenWord: function(list) {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
};

// When a key is pressed and let go of....
document.onkeyup = function() {
  // If there is no game active yet, it...

  if (GameState === false) {
    if (event.which === 32) {
      // Hides the "Press space bar to start!" div and unhides the scoreboard elements.
      document.getElementById("guess-count").innerText =
        "Guesses left: " + remainingGuesses;
      document.getElementById("Start").classList.add("invisible");
      document.getElementById("guess-count").classList.remove("invisible");
      document.getElementById("guesses").classList.remove("invisible");
      // Lets the program know that we now have a game running.
      GameState = true;

      // It picks a random word from the word list and creates a div for each letter of the word with spaces in place of the letters and adds it to the DOM tree
      word = wordList.chosenWord();
      // alert(word); // so we can see the chosen word if necessary

      // For each of the letters in the chosen word, creates a div with an underline and a blank space.
      for (i = 0; i < word.length; i++) {
        var LetterSpace = document.createElement("div");
        LetterSpace.classList.add("space");
        LetterSpace.classList.add(word[i]);
        LetterSpace.setAttribute("data-letter", "word[i]");
        LetterSpace.innerHTML = "&nbsp;";
        document.getElementById("spaces").appendChild(LetterSpace);
      }
    }

    // If there is already a game...
  } else if (GameState === true) {
    // If a letter key is pressed...
    if (event.key >= "a" && event.key <= "z") {
      // Subtracts 1 from the remaining guesses counter and updates the scoreboard
      remainingGuesses = remainingGuesses - 1;
      document.getElementById("guess-count").innerText =
        "Guesses left: " + remainingGuesses;

      // Updates the scoreboard with the letter that's been guessed
      document.getElementById("guesses").innerText += " " + event.key + ",";
      var arrayofletters = document.getElementsByClassName(event.key);

      // For each of the letters that match with the guess input
      for (i = 0; i < arrayofletters.length; i++) {
        // Add 1 to the number of correctly guessed letters
        correctGuesses = correctGuesses + 1;

        //Replace the empty div with the letter that should be there to form the chosen word
        if (arrayofletters[i].innerText != "&nbsp;") {
          arrayofletters[i].innerText = event.key;
        }
      }
      // Checks if you've run out of guesses or if you've guessed everything, and then tells you if you've won or lost accordingly
      if (correctGuesses == word.length) {
        alert("you win!");
      } else if (remainingGuesses <= 0) {
        alert("you lose! press 'F5' to try again :)");
      }
    }
  }
};
