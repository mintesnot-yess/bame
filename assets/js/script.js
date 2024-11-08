let navList = document.querySelector(".nav-list");
function toggleNavList() {
  navList.style.display == "flex" ? (navList.style.display = "none") : (navList.style.display = "flex");
}

let StudioImages = document.querySelectorAll("#studio-images img");
let BameImages = document.querySelectorAll("#bame-images img");
let ImageCurrentIndexBame = 0;
let ImageCurrentIndex = 0;
let MusicCurrentIndex = 0;
//music source list
let musicList = [
  {
    artist: "Negestst",
    title: "ere",
    src: "assets/music/music-src/Negestat - Eree (Official Music Video).mp3",
    alber_art: "assets/music/albem-arts/negestat1.jpg"
  },
  {
    artist: "Fire Ball ",
    title: "Velocity",
    src: "assets/music/music-src/Firebal.mp3",
    alber_art: "assets/music/albem-arts/R.jpeg"
  },
  {
    artist: "Go one",
    title: "1 2 3 Go",
    src: "assets/music/music-src/Go.mp3",
    alber_art: "assets/music/albem-arts/albem1.jpeg"
  }
];

StudioImages[1].style.flex = "1";
StudioImages[1].style.height = "100%";

BameImages[1].style.flex = "1";
BameImages[1].style.height = "100%";

function StudioImageNext() {
  StudioImages[ImageCurrentIndex].style.flex = "0";
  StudioImages[ImageCurrentIndex].style.height = "0";

  ImageCurrentIndex = (ImageCurrentIndex + 1) % StudioImages.length;

  StudioImages[ImageCurrentIndex].style.flex = "1";
  StudioImages[ImageCurrentIndex].style.height = "100%";
}

setInterval(StudioImageNext, 2000);

function BameImageNext() {
  BameImages[ImageCurrentIndex].style.flex = "0";
  BameImages[ImageCurrentIndex].style.height = "0";
  ImageCurrentIndex = (ImageCurrentIndex + 1) % BameImages.length;
  BameImages[ImageCurrentIndex].style.flex = "1";
  BameImages[ImageCurrentIndex].style.height = "100%";
}
setInterval(BameImageNext, 3000);
function previousImage() {
  StudioImages[ImageCurrentIndex].style.flex = "0";
  StudioImages[ImageCurrentIndex].style.height = "0";
  ImageCurrentIndex = (ImageCurrentIndex - 1) % StudioImages.length;
  StudioImages[ImageCurrentIndex].style.flex = "1";
  StudioImages[ImageCurrentIndex].style.height = "100%";
}

let audio = document.getElementById("audio");
let playButton = document.querySelectorAll(".play-audio");
let PlayToHidden = document.querySelectorAll(".play-hidden");

function AudioPlayer() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

audio.addEventListener("pause", function() {
  playButton.forEach(item => {
    item.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  });
});
audio.addEventListener("play", function() {
  playButton.forEach(item => {
    item.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  });
});

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${minutes}:${seconds}`;
}

audio.addEventListener("timeupdate", function() {
  let MusicSlider = document.querySelector("input[type='range']");
  MusicSlider.value = (audio.currentTime / audio.duration) * 100;
  let currentTime = document.querySelector("#current-time");
  let duration = document.querySelector("#duration");
  let ProgressBar = document.querySelector(".progress-bar");
  ProgressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
  currentTime.textContent = formatTime(audio.currentTime);
  duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("ended", function() {
  audio.currentTime = 0;
  audio.play();
});
let currentMusic = musicList[0];
document.querySelector(".artist").textContent = currentMusic.artist;
document.querySelector(".title").textContent = currentMusic.title;
audio.src = currentMusic.src;
document.querySelector(".bg-image").style.background = `url("${currentMusic.alber_art}") center/cover`;

// next music play
function nextMusic() {
  let currentMusic = musicList[MusicCurrentIndex];
  document.querySelector(".artist").textContent = currentMusic.artist;
  document.querySelector(".title").textContent = currentMusic.title;
  audio.src = currentMusic.src;

  MusicCurrentIndex = (MusicCurrentIndex + 1) % musicList.length;
  document.querySelector(".bg-image").style.background = `url("${currentMusic.alber_art}") center/cover`;
  AudioPlayer();
}
// previeu  music play
function previousMusic() {
  let currentMusic = musicList[MusicCurrentIndex];
  document.querySelector(".artist").textContent = currentMusic.artist;
  document.querySelector(".title").textContent = currentMusic.title;
  audio.src = currentMusic.src;
  MusicCurrentIndex = (MusicCurrentIndex - 1) % musicList.length;
  document.querySelector(".bg-image").style.background = `url("${currentMusic.alber_art}") center/cover`;
  AudioPlayer();
}

// layout container
const LayoutContainer = document.querySelector(".layout-container");
const toggleCard = () => {
  // if card style is display grid
  if (LayoutContainer.style.display === "grid") {
    LayoutContainer.style.display = "none";
  } else {
    LayoutContainer.style.display = "grid";
  }
};

// toggle address-map hight
const addressMap = document.querySelector(".address-map");
const toggleMapHeight = () => {
  if (addressMap.style.height === "0px") {
    addressMap.style.height = "300px";
  } else {
    addressMap.style.height = "0px";
  }
};
