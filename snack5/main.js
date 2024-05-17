('use strict');

/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.Stampa l'array alla fine. */

// inizializzazione array
const numeriDispari = [];

// ciclo for per chiedere all'utente di inserire 6 numeri
for (let i = 1; i < 7; i++) {

    const numero = Number(prompt(`inserisci il ${i}° numero:`));

    if (isNaN(numero)) {
        // messaggio di errore nel caso l'utente non inserisca un numero
        window.alert('perfavore inserisci solo numeri');
        break;
    } else if ((numero % 2) == 1) {
        // se numero è dispari, viene inserito nell'array
        numeriDispari.push(numero);
    }
}

// stampa l'array
console.log(numeriDispari);