('use strict');

// l'utente inserisce 2 numeri e stampa il maggiore
const numero1 = Number(prompt('inserisci un numero:'));
const numero2 = Number(prompt('inserisci un altro numero:'));

if (numero1 > numero2) {
    console.log(numero1 + ' è maggiore di ' + numero2);
} else if (numero2 > numero1) {
    console.log(numero2 + ' è maggiore di ' + numero1);
} else {
    console.log('i due numeri sono uguali');
}

