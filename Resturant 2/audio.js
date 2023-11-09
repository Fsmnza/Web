var audio = new Audio('haka.mp3');
var isPlaying = false;

var toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        toggleButton.textContent = 'Play';
    } else {
        audio.play();
        isPlaying = true;
        toggleButton.textContent = 'Stop';
    }
});
