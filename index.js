//-------------------------------------Event Occurance-----------------------------------------------//
var leng = document.querySelectorAll(".drum").length;


for (var i = 0; i < leng; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        EventListener(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
//-------------------------------------Event Function-----------------------------------------------//

document.addEventListener("keypress", function(event) {
    EventListener(event.key);
    buttonAnimation(event.key);
});

function EventListener(key) {
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
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}


function buttonAnimation(event) {

    var btnSelect = document.querySelector("." + event);
    btnSelect.classList.add("pressed");
    setTimeout(function() {
        btnSelect.classList.remove("pressed")
    }, 100)
}