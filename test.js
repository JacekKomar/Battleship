export const shipList = {
  id: "Lotniskowiec",
  img: "images/ships/lotniskowiec.jpg",
  title: "Lotniskowiec",
  desc: "klasa okrętów, której głównym zadaniem jest prowadzenie operacji bojowych za pomocą bazujących na nich samolotów i przystosowana do tego celu konstrukcyjnie (pokład startowy).Pierwsze okręty tej klasy powstały pod koniec I wojny światowej, następnie odegrały dużą rolę w walkach II wojny światowej, szczególnie na Pacyfiku.",
};

const showObject = document.querySelector("#showObject");

showObject.innerHTML = ` <div class="allInfoAboutShip"> ${shipList.id}   <img class="imageOfShip" src="${shipList.img}"/> <br>  ${shipList.desc} </div> `;
