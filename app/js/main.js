var bgImages = ["../images/bg1.jpg", "../images/bg2.jpg", "../images/bg3.jpg"];
var bgIndex = 0;
var bgInterval = 10000;
var bgElement = document.querySelector("#bg");
function bgChange() {
  bgElement.style.backgroundImage = "url(" + bgImages[bgIndex] + ")";
  bgIndex++;
  if (bgIndex >= bgImages.length) {
    bgIndex = 0;
  }
}
bgChange();
window.setInterval(bgChange, bgInterval);
