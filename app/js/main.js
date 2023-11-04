var bgImages = ["./images/bg1.jpg", "./images/bg2.jpg", "./images/bg3.jpg"];
let animationDuration = 2;
let bgIndex = 0;
let bgInterval = 6000;
let bgElement = document.querySelector("#bg");
function bgChange() {
  bgElement.style.backgroundImage = "url(" + bgImages[bgIndex] + ")";
  bgIndex++;
  if (bgIndex >= bgImages.length) {
    bgIndex = 0;
  }
}
bgChange();
window.setInterval(bgChange, bgInterval);
