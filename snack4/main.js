('use strict');

// lista invitati
const listaInvitati = ['Marco', 'Giuseppe', 'Luigi', 'Samuele'];

// chiede all'utente di inserise il suo nome
const nomeUtente = prompt('inserisci il tuo nome:');

// verifica se il nome è presente sulla lista
for (let i = 0; i < listaInvitati.length; i++) {
    let nomeLista = listaInvitati[i];
    if (nomeLista === nomeUtente) {
        console.log('puoi entrare');
        break;
    } else if (i === (listaInvitati.length - 1)) {
        console.log('mi dispiace il tuo nome non è sulla lista. Non puoi entare');
    }
}