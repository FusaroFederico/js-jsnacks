('use strict');

/* Snack 7
Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
Modificate poi il programma in modo che venga chiesto all'utente il numero 
massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito. */

// inizializzo un array vuoto
const tabellina = [];

// ciclo for che genera la tabellina del 2 fino a 1000
for (let i = 0; i <= 1000; i += 2) {
    // appende i a tabellina
    tabellina.push(i);
}

// stampa tabellina
console.log(tabellina);