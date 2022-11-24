(function a() {
  let exerciseList = document.querySelector(".exercise-list");

  let exerciseObjects = [
    {
      id: "Lotniskowiec",
      img: "images/ships/lotniskowiec.jpg",
      title: "Lotniskowiec",
      desc: "klasa okrętów, której głównym zadaniem jest prowadzenie operacji bojowych za pomocą bazujących na nich samolotów i przystosowana do tego celu konstrukcyjnie (pokład startowy).Pierwsze okręty tej klasy powstały pod koniec I wojny światowej, następnie odegrały dużą rolę w walkach II wojny światowej, szczególnie na Pacyfiku.",
    },
  ];

  let exerciseItems = "";

  for (exercise of exerciseObjects) {
    exerciseItems += exercise.title + exercise.img + exercise.desc;
  }
  exerciseList.innerHTML = exerciseItems;
})();
