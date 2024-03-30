//creare un array di objetti

const studenti = [
  {
    nome: "seniya",
    ruolo: "developer",
    eta: 23,
  },
  {
    nome: "thriwanka",
    ruolo: "progect manager",
    eta: 43,
  },
  {
    nome: "seniya",
    ruolo: "developer",
    eta: 23,
  },
  {
    nome: "king",
    ruolo: "data entry",
    eta: 18,
  },
];

console.log(studenti);

const tBodyElement = document.getElementById("tbodyDom");
const formElement = document.getElementById("docform");

//per ogni ogetto del sudenti

for (let i = 0; i < studenti.length; i++) {
  const currentStudente = studenti[i];
  console.log(currentStudente);

  //-recuperare il nome
  // const nome = currentStudente.nome;
  // //-recupeare il ruolo
  // const ruolo = currentStudente.ruolo;
  // //-recuperare l'eta
  // const eta = currentStudente.eta;

  // console.log(nome, ruolo, eta);

  // const trHtmlString = `
  // <tr>
  // <td>${nome}</td>
  // <td>${ruolo}</td>
  // <td>${eta}</td>
  // </tr>
  // `;
  // console.log(trHtmlString);
  // //creare il tag html del tr

  // //aggiungaiamo il tag nella tbody della tabella

  // tBodyElement.innerHTML += trHtmlString;

  appendTableHtml(currentStudente);
}

//recuperare il form
//dare una funziona a form

//questo fuzione acceta un parametro

formElement.addEventListener("submit", aggiungiMembro);

function aggiungiMembro(e) {
  //disabilitare la refresh del form
  e.preventDefault();

  //recupeare per ogni singolo input

  const nome = document.getElementById("nome").value;
  const ruolo = document.getElementById("ruolo").value;
  const eta = document.getElementById("eta").value;

  console.log(nome, ruolo, eta);

  const nuovoMembro = {
    nome: nome,
    ruolo: ruolo,
    eta: eta,
  };

  //pushare il nuovo membro dentro il array
  studenti.push(nuovoMembro);
  console.log(studenti);

  // const trHtmlString = `
  // <tr>
  // <td>${nome}</td>
  // <td>${ruolo}</td>
  // <td>${eta}</td>
  // </tr>
  // `;

  // tBodyElement.innerHTML += trHtmlString;

  appendTableHtml(nuovoMembro);
}

function appendTableHtml(membro) {
  const formElement = document.getElementById("docform");
  const trHtmlString = `
  <tr>
  <td>${membro.nome}</td>
  <td>${membro.ruolo}</td>
  <td>${membro.eta}</td>
  </tr>
  `;

  console.log(membro.nome, typeof membro.nome);

  tBodyElement.innerHTML += trHtmlString;
}
