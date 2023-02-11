const simpleVibrate = document.querySelector(".vibration__button--simple");

simpleVibrate.addEventListener("click", function () {
  navigator.vibrate(1000);
});
