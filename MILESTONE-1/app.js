console.log("hello-world");

/**Creare un array di oggetti di studenti.
Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
prima ciclate con un ciclo for
poi commentate il ciclo for e usate il forEach */

//creare un array do oggeti di studenti

let students = [
  {
    nome: "seniya",
    cognome: "thriwanka",
    eta: 23,
  },
  {
    nome: "luca",
    cognome: "merci",
    eta: 34,
  },
  {
    nome: "mauro",
    cognome: "pizza",
    eta: 66,
  },
];

const newStudent = [];
//ogni studente deve avere un nome ,cognome e eta

console.log(students);
//prima cicla tutti i studenti con un for

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log("tuti i studenti; ", student.nome, student.cognome);
}

//poi cicla tutti i studenti con un for each

students.forEach(function (student) {
  console.log(student.nome, student.cognome);
});
