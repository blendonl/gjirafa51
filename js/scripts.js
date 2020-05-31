var img = new Array();

img[0] = "img/main-0.jpg";
img[1] = "img/main-1.jpg";
img[2] = "img/main-2.jpg";
img[3] = "img/main-3.jpg";
img[4] = "img/main-4.jpg";
img[5] = "img/main-5.jpg";
img[6] = "img/main-6.jpg";
img[7] = "img/main-7.jpg";

var x = 0;

function changeItem() {
  document.getElementById("main-img").src = img[x];
  if (x < 7) {
    x++;
  } else if (x === 7) {
    x = 0;
  }
}

window.onload = function () {
  this.setInterval(function () {
    changeItem();
  }, 10000);
};
