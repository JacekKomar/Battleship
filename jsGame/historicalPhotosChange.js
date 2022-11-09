let historicalPhotoOne = document.getElementById("historicalPhotoOne");
let historicalsPhotoOne = [
  "images/historicalPhotosInGameRules/4.jpg",
  "images/historicalPhotosInGameRules/1.jpg",
  "images/historicalPhotosInGameRules/2.jpg",
  "images/historicalPhotosInGameRules/12.jpg",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  historicalPhotoOne.src = historicalsPhotoOne[random];
}, 4000);

let historicalPhotoTwo = document.getElementById("historicalPhotoTwo");
let historicalsPhotoTwo = [
  "images/historicalPhotosInGameRules/6.jpg",
  "images/historicalPhotosInGameRules/3.jpg",
  "images/historicalPhotosInGameRules/5.jpg",
  "images/historicalPhotosInGameRules/11.jpg",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  historicalPhotoTwo.src = historicalsPhotoTwo[random];
}, 4000);

let historicalPhotoThree = document.getElementById("historicalPhotoThree");
let historicalsPhotoThree = [
  "images/historicalPhotosInGameRules/7.jpg",
  "images/historicalPhotosInGameRules/8.jpg",
  "images/historicalPhotosInGameRules/9.jpg",
  "images/historicalPhotosInGameRules/10.jpg",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  historicalPhotoThree.src = historicalsPhotoThree[random];
}, 4000);
