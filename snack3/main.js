('use strict');
// chiede all'utente dio inserire 10 valore e ne stampa la somma

// inizializzo variabile somma
let somma = 0;

// ciclo for
for (let i = 1; i <= 10; i++) {

    // l'utente inserisce un numero
    const numero = Number(prompt('inserisci un numero:'));

    // si somma con gli altri
    somma = somma + numero;
}

// stampa somma
console.log(somma);