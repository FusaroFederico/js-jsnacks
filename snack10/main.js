('use strict');

/* Snack 10
Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare. */

// inizializzo un array che contiene tutti i numeri inseriti dall'utente
const numeriUtente = [];

// ciclo for
for (let i = 1; i > 0; i++) {
    // l'utente inserisce un numero
    const numero = Number(prompt('inserisci un numero'));

    //numero viene appeso a numeriUtente
    numeriUtente.push(numero);

    // se l'utente inserisce 2 numeri consecutivi uguali interrompe l'esecuzione
    if ((i >= 2) && (numeriUtente[i - 1] === numeriUtente[i - 2])) {
        console.log(numeriUtente);
        break;
    }
}