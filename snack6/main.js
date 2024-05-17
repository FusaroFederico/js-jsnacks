('use strict');

/* Snack 6
Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero.
Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso. */

// genera un numero casuale tra 0 e 10
const numeroRandom = Math.round(Math.random() * 10);

// l'utente inserisce un numero
const numeroUtente = Number(prompt('inserisci un numero intero compreso tra 0 e 10'));

// se il numeroUtente corrisponde al numeroRandom stampa 'Complimenti, hai vinto!'
// altrimenti stampa 'Mi dispiace. Hai perso!'
if (numeroUtente === numeroRandom) {
    console.log('Complimenti, hai vinto!');
} else {
    console.log('Mi dispiace. Hai perso!')
}