document.addEventListener("DOMContentLoaded", function() {
    let playButton = document.getElementById("playButton");
    let song = document.getElementById("song");

    playButton.addEventListener("click", function() {
        if (song.paused) {
            song.play();
            playButton.textContent = "Pausar";
        } else {
            song.pause();
            playButton.textContent = "Reproducir";
        }
    });
});
