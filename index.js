var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


  });

}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

  switch(key) {
    case "w":
      var kick = new Audio("sounds/kick.wav");
      kick.play();
      break;

    case "a":
      var snare = new Audio("sounds/snare.wav");
      snare.play();
      break;

    case "s":
      var eight0eight = new Audio("sounds/808.wav");
      eight0eight.play();
      break;

    case "d":
      var hihat = new Audio("sounds/hihat.wav");
      hihat.play();
      break;

    case "j":
      var tom1 = new Audio("sounds/tom1.wav");
      tom1.play();
      break;

    case "k":
      var tom2 = new Audio("sounds/tom2.wav");
      tom2.play();
      break;

    case "l":
      var tom3 = new Audio("sounds/tom3.wav");
      tom3.play();
      break;

    default: console.log(key);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);


}
