import {
  USER_RANKING_LIST,
  addUserListToLocalStorage,
} from "./localStorageHelpers.js";

const predefinedPlayers = [
  {
    name: "Douglas MacArthur",
    points: 29,
  },
  {
    name: "Hideki Tōjō ",
    points: 25,
  },
  {
    name: "Chester Nimitz ",
    points: 21,
  },
  {
    name: "Czang Kaj-szek ",
    points: 17,
  },
  {
    name: "Chūichi Nagumo ",
    points: 13,
  },
  {
    name: "Archibald Percival Wavell ",
    points: 7,
  },
  {
    name: "Chorlogijn Czojbalsan ",
    points: 1,
  },
];

function renderUser(user, index) {
  return `
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${user.name}</td>
    <td>${user.points}</td>
  </tr>
  `;
}

function loadUserListFromLocalStorage() {
  const userList = JSON.parse(localStorage.getItem(USER_RANKING_LIST) || "[]");

  const allUserList = [...userList, ...predefinedPlayers];

  const newUserListsOrder = allUserList.sort(
    (a, b) => parseInt(a.points) < parseInt(b.points)
  );

  return newUserListsOrder.map(renderUser).join("");
}

let tableRanking = document.querySelector("#tableRanking");
tableRanking.innerHTML = `
<table class="table table-dark" id="result-table">
      <th>#</th>
      <th>Nazwa użytkownika</th>
      <th>Zdobyte punkty</th>

   ${loadUserListFromLocalStorage()}
  
 
`;
