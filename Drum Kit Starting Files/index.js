// Select all elements with the class "drum" once and store them in a variable
var drumButtons = document.querySelectorAll(".drum");

// Add click event listeners to each drum button
for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    // Get the innerHTML (text) of the clicked button
    var button = this.innerHTML;
    // Call the makeSound function with the button as an argument
    makeSound(button);
    // Call the makeAnimation function with the button as an argument
    makeAnimation(button);
  });
}

// Detecting keypress
document.addEventListener("keypress", function (event) {
  // When a key is pressed, call the makeSound function with the pressed key as an argument
  makeSound(event.key);
  // Call the makeAnimation function with the pressed key as an argument
  makeAnimation(event.key);
});

// Function to add a temporary animation effect to the pressed button
function makeAnimation(button) {
  // Find the HTML element with the class matching the pressed button
  var activeButton = document.querySelector("." + button);
  // Add the "pressed" class to the element to create a button press animation
  activeButton.classList.add("game-over");
  // Remove the "pressed" class after 100 milliseconds to reset the animation
  setTimeout(function () {
    activeButton.classList.remove("game-over");
  }, 100000);

}

// Function to play a sound based on the button or key pressed
function makeSound(button) {
  // Use a switch statement to determine which sound to play based on the button or key
  switch (button) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      // If an invalid key or button is pressed, do nothing
      break;
  }
}
