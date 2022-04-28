
// can use for-loop as well

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // console.log(this); // it will give everythig related to that button

        // this.style.color = "white";

        // var band = this.textContent;

        var band = this.innerHTML;
        makeSound(band);
        buttonKey(band);

    });
}

// for screen click above;

// for key from keyboard is pressed below 
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonKey(event.key);
}
);


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;

        default:
            break;
    }
}

function buttonKey(currentKey) {
    var buttonSelected = document.querySelector("." + currentKey);
    buttonSelected.classList.add("pressed");

    setTimeout(function () {
        buttonSelected.classList.remove("pressed");

    })
}