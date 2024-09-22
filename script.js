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

const toggleButton = document.getElementById("toggleButton");
const backgroundMusic = document.getElementById("backgroundMusic");
let isPlaying = false;

toggleButton.addEventListener("click", () => {
  if (isPlaying) {
    backgroundMusic.pause();
    toggleButton.textContent = "Play Music";
  } else {
    backgroundMusic.play();
    toggleButton.textContent = "Pause Music";
  }
  isPlaying = !isPlaying;
});

document.addEventListener("DOMContentLoaded", function () {
  const laptopArea = document.querySelector(".laptop-area");
  const details = document.getElementById("details");

  // Handle click event
  laptopArea.addEventListener("click", function () {
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  });
});

// Close details when clicking outside
window.addEventListener("click", function (event) {
  if (!details.contains(event.target) && event.target !== laptopArea) {
    details.style.display = "none";
    details.setAttribute("aria-hidden", "true");
  }
});

// Prevent clicks inside details from closing it
details.addEventListener("click", function (event) {
  event.stopPropagation();
});