import {
  USER_RANKING_LIST,
  addUserListToLocalStorage,
} from "./localStorageHelpers.js";

const predefinedPlayers = [
  {
    name: "Generał Barbarossa",
    points: 23,
  },
  {
    name: "Kono Przegryw barbażyńca ",
    points: 2,
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
// let name = prompt("Wpisz swój nick");
// addUserListToLocalStorage({ name: name, points: 1234 });
// let name2 = name;

// let imiona = localStorage.getItem("imiona") || [];
// localStorage.setItem("imiona", [...imiona, name2]);

let scoreInRanking = (tableRanking.innerHTML = `
<table class="table table-dark" id="result-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Nazwa użytkownika</th>
      <th>Zdobyte punkty</th>
    </tr>
  </thead>
  <tbody>
   ${loadUserListFromLocalStorage()}
    <tr>
      <th scope="row">2</th>
      <td>Douglas MacArthur</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">4544</th>
      <td>Hideki Tōjō</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Chester Nimitz</td>
      <td>21</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Czang Kaj-szek</td>
      <td>17</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Chūichi Nagumo</td>
      <td>13</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Archibald Percival Wavell</td>
      <td>7</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Chorlogijn Czojbalsan</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
`);
