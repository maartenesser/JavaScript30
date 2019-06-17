removeClass = (key) => {
  if (key.classList.contains("playing"))
    key.classList.remove("playing");
}

playSound = (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.play();
}

addClass = (key) => {
  key.classList.add("playing");
}


window.addEventListener("keydown", (event) => {
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    addClass(key);
    playSound(event);
    setTimeout(function () {
      removeClass(key)
    }, 100);

})

