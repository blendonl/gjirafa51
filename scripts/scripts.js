var images = new Array();

images[0] = "/images/main-0.jpg";
images[1] = "/images/main-1.jpg";
images[2] = "/images/main-2.jpg";
images[3] = "/images/main-3.jpg";
images[4] = "/images/main-4.jpg";
images[5] = "/images/main-5.jpg";
images[6] = "/images/main-6.jpg";
images[7] = "/images/main-7.jpg";

var x = 0;

function changeItem() {
  document.getElementById("main-img").src = images[x];
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
