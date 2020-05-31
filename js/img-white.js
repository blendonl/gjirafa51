window.onload = function () {
  var heart = document.getElementById("heart-img");
  heart.onmouseover = function () {
    heart.src = "../img/heart-white.svg";
  };
  var shoppingc = document.getElementById("shopping-cart-img");

  shoppingc.onfocus = function () {
    shoppingc.src = "../img/shopping-cart-white.svg";
  };
};
