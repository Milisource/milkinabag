// Array of background image paths
const backgrounds = [
  "Resources/Backgrounds/20.png",
  "Resources/Backgrounds/60.png",
  "Resources/Backgrounds/24.png",
  "Resources/Backgrounds/39.png",
  "Resources/Backgrounds/36.png",
  "Resources/Backgrounds/52.png",
  "Resources/Backgrounds/68.png",
  "Resources/Backgrounds/81.png",
];

// Generate a random number based on the length of the backgrounds array
const randomIndex = Math.floor(Math.random() * backgrounds.length);

// Apply the randomly selected background
document.getElementById(
  "background"
).style.backgroundImage = `url('${backgrounds[randomIndex]}')`;

document.addEventListener("DOMContentLoaded", function() {
  const musicToggle = document.getElementById("musicToggle");
  const musicText = document.getElementById("musicText");
  const backgroundMusic = document.getElementById("backgroundMusic");

  // Initial state: music is playing because autoplay is on
  let isPlaying = true;

  musicToggle.addEventListener("click", function() {
    if (isPlaying) {
      backgroundMusic.pause();
      musicText.textContent = "Play Music"; // Change the text inside the <p> tag
    } else {
      backgroundMusic.play();
      musicText.textContent = "Stop Music"; // Change the text inside the <p> tag
    }
    isPlaying = !isPlaying; // Toggle the state
  });
});