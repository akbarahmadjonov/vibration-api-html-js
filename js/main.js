const simpleVibrate = document.querySelector(".vibration__button--simple");

simpleVibrate.addEventListener("click", function () {
  navigator.vibre(1000);
});
