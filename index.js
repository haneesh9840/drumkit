for (var i = 0; i < 7; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function() {

        makesound(this.innerHTML)
        addanimation(this.innerHTML)
    })
}
document.addEventListener("keydown", function(event) {
    makesound(event.key)
    addanimation(event.key)
})

function makesound(button) {
    var audio;
    switch (button) {
        case "w":
            tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            console.log(button)
            break;
    }
}

function addanimation(key) {
    document.querySelector("." + key).classList.add("pressed")
    setTimeout(() => document.querySelector("." + key).classList.remove("pressed"), 300)

}