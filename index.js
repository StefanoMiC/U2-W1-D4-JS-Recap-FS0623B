// PRIMITIVES: string, number, boolean, undefined, null, symbol....
let name = "Stefano";

{
  let name = "Valerio";
  // qui dentro leggiamo il nuovo namespace ("Valerio") per la variabile name creata qui dentro (non modifica name esterno)
  console.log(name);
}

console.log(name); // "Stefano"

const num = 0;
// num = 1; //ERRORE:  Assignment to constant variable

let newNum; // undefined è assenza totale di valore
let myNum = null; // assenza deliberata di valore che presume di essere cambiato in futuro
console.log(newNum);

// controllo del flusso del programma
// segliere la direzione in cui dovrà andare il programma

// const query = prompt("Dammi un valore");
const query = true;

// truthy / falsy
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

if (query) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// DATATYPE STRUTTURALI
// object, array

// let firstName ="Stefano"
// let lastName ="Miceli"
// let role = "Teacher"

// Object

const teacher = {
  name: "Stefano",
  surname: "Miceli",
  role: "Teacher",
  "e-mail": "stefano.miceli@gmail.com"
};

// dot notation per accedere alle proprietà di un oggetto

console.log(teacher);
console.log(teacher.role);

// square brackets notation
let char = "e-mail";

console.log(teacher["e-mail"]);

console.log(teacher[char]); // teacher["e-mail"] => "stefano.miceli@gmail.com"
console.log(teacher.char); // teacher["char"] => undefined

teacher.hairColor = "Brown";
console.log(teacher);

// eliminaizone di proprietà
delete teacher.role;
console.log(teacher);

// teacher = null; // dal momento che teacher è dichiarato come costante non si può fare

// Array

const myMixedArr = ["string", 0, undefined]; // evitate array misti o eterogenei

const myNumArray = [0, 5, 10, 22, 50];
const myBoolArray = [true, false, false, false, true];
const myStrArray = ["apple", "banana", "kiwi", "ananas", "pear"];

myStrArray.pop();
myStrArray.shift();

myStrArray.push("orange");
myStrArray.unshift("papaya");

const kiwiPosition = myStrArray.indexOf("kiwi");
console.log(kiwiPosition);

myStrArray.splice(kiwiPosition, 1, "grape");

const newStrArray = myStrArray.slice();
const onlyThree = myStrArray.slice(0, 3);

newStrArray.pop();
console.log(myStrArray);
console.log(newStrArray);
console.log(onlyThree);
const concatenatedArrays = newStrArray.concat(onlyThree);
console.log(concatenatedArrays);

const filteredNums = myNumArray.filter(num => num > 5 && num !== 10); // filter ritorna un nuovo array con solo gli elementi che passano un test che creiamo noi
console.log(filteredNums);
const mappedNums = myNumArray.map(num => num * 3); // anche il map torna un nuovo array con lo stesso numero di elementi iniziali (non discrimina nulla), serve a TRASFORMARE gli elementi in qualcos'altro
const mappedNums2 = myNumArray.map(num => `<li>${num}</li>`).join(""); // anche il map torna un nuovo array con lo stesso numero di elementi iniziali (non discrimina nulla), serve a TRASFORMARE gli elementi in qualcos'altro
console.log(mappedNums);
console.log(mappedNums2);

// console.log("primo", myStrArray[0]);
// console.log("secondo", myStrArray[1]);
// console.log("terzo", myStrArray[2]);
// console.log("quarto", myStrArray[3]);
// console.log("quinto", myStrArray[4]);
// console.log("sesto", myStrArray[5]);

// for loop è un contesto che itera un numero definito di volte
// torna molto utile per automatizzare dei processi che richiedono step multipli
const emptyArr = [];

for (let i = 0; i < 100; i++) {
  emptyArr.push(i + 1);
}
console.log(emptyArr);

for (let i = 0; i < myStrArray.length; i++) {
  console.log(myStrArray[i]);
}

const arrOfUsers = [];
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];

//   const newObj = { name: user.name, email: user.email };
//   arrOfUsers.push(newObj);
// }

users.forEach((user, i) => {
  const newObj = { name: user.name, email: user.email, address: user.address.street };
  arrOfUsers.push(newObj);
});

console.log(arrOfUsers);

// FUNZIONI

// funzione void - senza return
const greet = function () {
  console.log("Ciao Epicoders");
};

greet();

// funzione fruttifera (fruitful) - ritorna qualcosa
const greet2 = function () {
  return "Ciao Epicoders";
};

console.log(greet2());

const returnedStr = greet2() + "!!!";
console.log(returnedStr);

let counter = 0;
const increment = function () {
  counter++;
};

console.log(counter);
increment();
increment();
increment();
increment();
increment();
console.log(counter);

// const sayHello = function (name) {
//   return "Ciao " + name;
// };
const sayHello = name => "Ciao " + name;

sayHello("ragazzi");
sayHello("Alessandro");
sayHello("Alessio");
sayHello("Mattia");

arrOfUsers.forEach(user => console.log(sayHello(user.name)));
