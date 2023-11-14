const wrapper = document.querySelector(".wrapper"),
  musicImg = wrapper.querySelector(".img-area img"),
  musicName = wrapper.querySelector(".song-details .name"),
  musicArtist = wrapper.querySelector(".song-details .artist"),
  mainAudio = wrapper.querySelector("#main-audio"),
  playPauseBtn = wrapper.querySelector(".play-pause"),
  nextBtn = wrapper.querySelector("#next")

let musicIndex = 3;

window.addEventListener("load", () => {
  loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  mainAudio.src = `sounds/${allMusic[indexNumb - 1].src}.mp3`;
}

const playMusic = () => {
  wrapper.classList.add("paused");
  // playPauseBtn.querySelector('i').innerText = "pause"
  mainAudio.play();
};
const pauseMusic = () => {
  wrapper.classList.remove("paused");
  playPauseBtn.querySelector('i').innerText = "play_arrow"

  mainAudio.pause();
};

// adding  next
function nextMusic(){
  musicIndex++
  musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex)
  playMusic()
}
nextBtn.addEventListener("click", () =>{
  nextMusic()
})

playPauseBtn.addEventListener("click", () => {
  const isMusicPlaying = wrapper.classList.contains("paused");
  isMusicPlaying ? pauseMusic() : playMusic();
});



// adding  prev

// update music current time