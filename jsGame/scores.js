let tableRanking = document.querySelector("#tableRanking");
let name = prompt("Wpisz swój nick");
let scoreInRanking = (tableRanking.innerHTML = `
<table class="table table-dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Nazwa użytkownika</th>
      <th>Zdobyte punkty</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">0</th>
      <td> ${name}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Douglas MacArthur</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">2</th>
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
