let historicalPhotoOne = document.getElementById("historicalPhotoOne");
let historicalsPhotoOne = [
  "images/historicalPhotosInGameRules/4.jpg",
  "images/historicalPhotosInGameRules/1.jpg",
  "images/historicalPhotosInGameRules/2.jpg",
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
];
setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  historicalPhotoTwo.src = historicalsPhotoTwo[random];
}, 4000);
