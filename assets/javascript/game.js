// Upon pressing a key, the text gets 100% opacity.

document.onkeyup = function() {
  // if (e.which === 32) { attmept to make it space bar only

  // Gives "press any key to start" 0% opacity
  document.getElementById("Start").style.color = "rgb(0,0,0,0)";
  // There are 16(max word length) divs that have bottom borders, all at opacity 0%, aligned horizontally L > R across the screen.
  // Pick a word from the list of words
  // If (div# (left to right) is less than word length)
  // change opacity of div to 100%
};
