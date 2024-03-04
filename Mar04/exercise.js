// "use strict";
console.log("ex");

let wikiArticle = {
  "First Name": "Thomas",
  "Last Name": "Ngo"
}

let b = `<br/>
<table>
<thead>
  <tr>
    <th colspan="2">Tougher In Alaska</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Starring</td>
    <td>Geo Beach</td>
  </tr>
  <tr>
    <td>Country of origin</td>
    <td>United States</td>
  </tr>
  <tr>
    <td>No. of seasons</td>
    <td>1</td>
  </tr>
  <tr>
    <td>No. of episodes</td>
    <td>13</td>
  </tr>
  <tr>
  <td>NAME</td>
  <td>${wikiArticle["First Name"]}</td>
</tr>
</tbody>
</table>
<br/>`

// document.body.append(b);
document.body.insertAdjacentHTML('beforeend', b);

let people = [
  {
    name: 'A_name',
    email: 'A_email',
    hobbies: 'A_hobbies'
  },
  {
    name: 'B_name',
    email: 'B_email',
    hobbies: 'B_hobbies'
  },
  {
    name: 'C_name',
    email: 'C_email',
    hobbies: 'C_hobbies'
  }
]

let content = ``;

content += `<br/>
<table>
<thead>
  <tr>
    <th colspan="3">Exercise</th>
  </tr>
</thead>
<tbody>`;

for (let i = 0;i<people.length;i++) {
  content += `
    <tr>
      <td>${people[i]['name']}</td>
      <td>${people[i]['email']}</td>
      <td>${people[i]['hobbies']}</td>
    </tr>
  `;
}

content += `
</tbody>
</table>
<br/>`;

document.body.insertAdjacentHTML('beforeend', content);