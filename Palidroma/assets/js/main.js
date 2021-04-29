//Chiedere all’utente di inserire una parola
var parolaUtente = prompt('Inserisci la parola da verificare').toUpperCase();

//Creare una funzione per capire se la parola inserita è palindroma 
/**
 * ### Parola scritta al contrario 
 * @param {string} parola Indica la parola originale
 * @param {string} parolaInversa Indica la parola originale scritta inversamente
 * @returns {string}
 */

function parolaInversa (parola) {
    var parolaInversa = parola.split('').reverse().join('');  
    return parolaInversa;
}

var parolaUtenteInversa = parolaInversa(parolaUtente);

var messaggio;
if (parolaUtente === parolaUtenteInversa) {
    messaggio = ('la parola da te inserita è Palindroma!');
} else {
    messaggio = ('la parola da te inserita NON è Palindroma!');
}

document.getElementById('parolaUtente').innerHTML = parolaUtente;
document.getElementById('parolaUtenteInversa').innerHTML = parolaUtenteInversa;
document.getElementById('messaggio').innerHTML = messaggio;
