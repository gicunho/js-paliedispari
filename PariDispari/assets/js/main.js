//L’utente sceglie pari o dispari 
var sceltaUtentePari = prompt('Pari o Dispari?');

// e inserisce un numero da 1 a 5
var sceltaUtenteNumero = Number(prompt('Inserisci un numero da 1 a 5'));
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
/**
 * ### Generazione numero casuale
 * @param {number} min Numero minimo da generare
 * @param {number} max Numero massimo da generare
 * @returns {number}
 */

function numeroPc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var numeroCasualePc = numeroPc(1, 5);

//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
/**
 * ## Verifica se Pari o Dispari
 * @param {number} numero_1 
 * @param {number} numero_2 
 * @returns {string}
 */
function verificaPari (numero_1, numero_2) {
    somma = numero_1 + numero_2;
    if (somma % 2 == 0){
        message = 'pari';
    } else {
        message = 'dispari';
    }
    return message;
}
//Dichiariamo chi ha vinto.

var risultato = verificaPari(sceltaUtenteNumero, numeroCasualePc);

/* console.log(sceltaUtentePari);
console.log(sceltaUtenteNumero);
console.log(numeroCasualePc);
console.log(risultato); */

if (risultato === sceltaUtentePari.toLowerCase()) {
    alert('Complimenti, hai vinto!');
} else {
    alert('Purtroppo hai perso!');
}