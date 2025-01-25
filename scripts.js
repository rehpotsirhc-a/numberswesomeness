let nopeAudio;
let imouttahereAudio;
let imouttahereInterval;

function runJavaScript(){
    // Stop the previous nope and imouttahere audio if they are playing
    if (nopeAudio) {
        nopeAudio.pause();
        nopeAudio.currentTime = 0;
    }
    if (imouttahereAudio) {
        imouttahereAudio.pause();
        imouttahereAudio.currentTime = 0;
    }
    // Clear the previous intervals if they exist
    if (imouttahereInterval) {
        clearInterval(imouttahereInterval);
    }

    let chosencolor = (prompt("Enter your favorite color:")); 
if (chosencolor.toLowerCase() === "7"){
    alert("YUP!!!");
    document.getElementById("resultImage").src = "pics/IMG_4413.png";
    document.getElementById("resultImage").style.display = "block";
    document.getElementById("resultImage").classList.remove("translate-left"); //excludes centering the image
    let audio = new Audio('sounds/25 confetti Sound Effect.mp3');
    audio.play();
} else {
    alert("NOPE!!!");
    document.getElementById("resultImage").src = "pics/Img_4418.png";
    document.getElementById("resultImage").style.display = "block";
    document.getElementById("resultImage").classList.add("translate-left"); //centers the gif
    document.getElementById("resultImage").classList.add("fade-out"); // Add fade-out class
    document.body.style.backgroundImage = "url('pics/backgroundevil.jpg')"; // Change background image
    setTimeout(function() {
        nopeAudio = new Audio('sounds/lobotomy sound effect.mp3');
        nopeAudio.volume = 0.6; // Set volume to 60%
        nopeAudio.play();
    }, 100); // plays nope.mp3 after 0.1 seconds

    setTimeout(function() {
        imouttahereAudio = new Audio('sounds/lobotomy sound effect.mp3');
        imouttahereAudio.play();
        imouttahereInterval = setInterval(function() {
            imouttahereAudio.play();
        }, 5400); // repeats imouttahere.mp3 every 5.4 seconds
    }, 2100); // plays imouttahere.mp3 after 2.1 seconds
    }
}