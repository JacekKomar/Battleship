let image = document.getElementById("image");
let images = [
  "images/propaganda/2.jpg",
  "images/propaganda/5.jpg",
  "images/propaganda/8.jpg",
  "images/propaganda/12.jpg",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 4);
  image.src = images[random];
}, 4000);

let imageTwo = document.getElementById("imageTwo");
let imagesTwo = [
  "images/propaganda/1.jpg",
  "images/propaganda/6.jpg",
  "images/propaganda/7.jpg",
  "images/propaganda/10.jpg",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 4);
  imageTwo.src = imagesTwo[random];
}, 4000);

let imageThree = document.getElementById("imageThree");
let imagesThree = [
  "images/propaganda/13.jpg",
  "images/propaganda/14.jpg",
  "images/propaganda/15.jpg",
  "images/propaganda/16.jpg",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 4);
  imageThree.src = imagesThree[random];
}, 4000);

let imageFour = document.getElementById("imageFour");
let imagesFour = [
  "images/propaganda/3.jpg",
  "images/propaganda/4.jpg",
  "images/propaganda/9.jpg",
  "images/propaganda/11.jpg",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 4);
  imageFour.src = imagesFour[random];
}, 4000);
