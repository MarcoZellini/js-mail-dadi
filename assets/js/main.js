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
userResultElement.append("Il numero dell'utente è: " + userNumber);
computerResultElement.append("Il numero del computer è: " + computerNumber);

if (userNumber > computerNumber) {
    console.log("Ha vinto l'utente!");
    diceResultElement.append("Ha vinto l'utente!");
} else if (userNumber < computerNumber) {
    console.log('Ha vinto il computer!');
    diceResultElement.append("Ha vinto il computer!");
} else {
    console.log('Pari merito!');
    diceResultElement.append("Pari merito!");
}

/* MAIL */

//creo la mia lista di email
const emailList = [];

//assegno vari valori alla mia lista
emailList.push('abc@gmail.com');
emailList.push('ciao@libero.it');
emailList.push('zellini@hotmail.com');
emailList.push('marco@outlook.com');
emailList.push('pippo@yahoo.com');
emailList.push('hello@gmail.com');

//definisco una costante che conterrà un elemento bottone
const buttonElement = document.querySelector("button[type='submit']");
console.log(buttonElement);

const formElement = document.querySelector('form');

//allo scatenarsi dell'evento submit esegui del codice...
formElement.addEventListener('submit', function (e) {
    //prevengo il comportamento di default del buttone submit, perciò prevengo il refresh della pagina
    e.preventDefault();

    //definisco le mie variabili
    const emailInputElement = document.querySelector("input[type='email']");
    const emailInputValue = emailInputElement.value;
    let emailCheckMessage;

    console.log("emailInputElement, emailInputValue -->", emailInputElement, emailInputValue);

    //controllo se la mail inserita si trova all'interno nella lista
    if (emailList.includes(emailInputValue)) {
        emailCheckMessage = `Benvenuto ${emailInputValue}! Puoi accedere a questo sito!`;
        console.log(`Benvenuto ${emailInputValue}! Puoi accedere a questo sito!`);
    } else {
        emailCheckMessage = `Attenzione! L'indirizzo mail ${emailInputValue} non esiste!`;
        console.log(`Attenzione! L'indirizzo mail inserito non esiste!`);
    }

    //scrivo in pagina il risultato della ricerca
    const emailCheckResultElement = document.getElementById('email_check_result');
    console.log(emailCheckResultElement);
    emailCheckResultElement.innerHTML = " ";
    emailCheckResultElement.append(emailCheckMessage);
})