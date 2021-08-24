function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
//    key.classList.add("playing");
}
// var keys = document.querySelectorAll(".key");
// keys.classList.add("playing");

window.addEventListener("keydown", playSound);
