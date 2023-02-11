const simpleVibrate = document.querySelector(".vibration__button--simple");
const patternVibrate = document.querySelector(".vibration__button--pattern");
const marioVibrate = document.querySelector(".vibration__button--mario");

// Simple
simpleVibrate.addEventListener("click", function () {
  navigator.vibrate(1000);
});

patternVibrate.addEventListener("click", function () {
  navigator.vibrate([400, 400, 300, 700]);
});

marioVibrate.addEventListener("click", function () {
  navigator.vibrate([
    125, 75, 125, 275, 200, 275, 125, 75, 125, 275, 200, 600, 200, 600,
  ]);
});
