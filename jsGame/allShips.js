export const shipListOne = {
  id: "Lotniskowiec",
  img: "images/ships/lotniskowiec.jpg",
  title: "Lotniskowiec",
  desc: "klasa okrętów, której głównym zadaniem jest prowadzenie operacji bojowych za pomocą bazujących na nich samolotów i przystosowana do tego celu konstrukcyjnie (pokład startowy).Pierwsze okręty tej klasy powstały pod koniec I wojny światowej, następnie odegrały dużą rolę w walkach II wojny światowej, szczególnie na Pacyfiku.",
};

export const shipListTwo = {
  id: "Krążownik",
  img: "images/ships/krążownik.jpg",
  desc: "klasa dużych, silnie uzbrojonych okrętów nawodnych, wyróżniana od II połowy XIX wieku do chwili obecnej. Stanowiła jedną z podstawowych klas okrętów.",
};

export const shipListThree = {
  id: "Niszczyciel",
  img: "images/ships/niszczyciel.jpg",
  desc: "szybki, wielozadaniowy okręt średniej wielkości, przeznaczony do takich zadań, jak ochrona własnych jednostek, zwalczanie lotnictwa, okrętów podwodnych i innych jednostek wroga.  Pierwsze okręty tej klasy powstały pod koniec XIX wieku dla zwalczania torpedowców. W miarę rozwoju środków wojny morskiej, takich jak samoloty i okręty podwodne, niszczyciele otrzymywały coraz silniejsze i bardziej zróżnicowane uzbrojenie, stając się jednostkami uniwersalnymi.",
};

export const shipListFour = {
  id: "Pancernik",
  img: "images/ships/pancernik.jpg",
  desc: "klasa dużych, silnie opancerzonych i uzbrojonych pełnomorskich okrętów artyleryjskich, stanowiących trzon największych flot wojennych od czasu powstania klasy pancerników w drugiej połowie XIX wieku do okresu II wojny światowej. ",
};

export const shipInfo = {
  displayMessage: function () {
    const showObject = document.querySelector("#showObject");

    showObject.innerHTML = ` <div class="allInfoAboutShip"> <h4 class="bold"> Zatopiłeś:  ${shipListOne.id} </h4>  <img class="imageOfShip" src="${shipListOne.img}"/> <br>  ${shipListOne.desc} </div> `;
  },
};

export const shipInfoTwo = {
  displayMessage: function () {
    const showObject = document.querySelector("#showObjectTwo");

    showObject.innerHTML = ` <div class="allInfoAboutShip"> <h4 class="bold"> Zatopiłeś:  ${shipListTwo.id} </h4>  <img class="imageOfShip" src="${shipListTwo.img}"/> <br>  ${shipListTwo.desc} </div> `;
  },
};

export const shipInfoThree = {
  displayMessage: function () {
    const showObject = document.querySelector("#showObjectThree");

    showObject.innerHTML = ` <div class="allInfoAboutShip"> <h4 class="bold"> Zatopiłeś:  ${shipListThree.id} </h4>  <img class="imageOfShip" src="${shipListThree.img}"/> <br>  ${shipListThree.desc} </div> `;
  },
};

export const shipInfoFour = {
  displayMessage: function () {
    const showObject = document.querySelector("#showObjectFour");

    showObject.innerHTML = ` <div class="allInfoAboutShip"> <h4 class="bold"> Zatopiłeś:  ${shipListFour.id} </h4>  <img class="imageOfShip" src="${shipListFour.img}"/> <br>  ${shipListFour.desc} </div> `;
  },
};
