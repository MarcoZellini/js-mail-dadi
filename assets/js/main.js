/* 
    *Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
    
    *Mail
    Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
    Bonus
    Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
*/


/* DADI */

//genero i due numeri casuali
const userNumber = Math.ceil(Math.random() * 6);
const computerNumber = Math.ceil(Math.random() * 6);

//definisco delle variabili a cui assegno i vari nodi del DOM
const diceResultElement = document.querySelector('#dice_result');
const userResultElement = document.querySelector('#user_result');
const computerResultElement = document.querySelector('#computer_result');

//Scrivo i risultati sui vari nodi
userResultElement.append("Il numero dell'utente è: " + userNumber );
computerResultElement.append("Il numero del computer è: " + computerNumber );

if(userNumber > computerNumber) {
    console.log("Ha vinto l'utente!");
    diceResultElement.append("Ha vinto l'utente!");
} else if (userNumber < computerNumber) {
    console.log('Ha vinto il computer!');
    diceResultElement.append("Ha vinto il computer!");
} else {
    console.log('Pari merito!');
    diceResultElement.append("Pari merito!");
}


