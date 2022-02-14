// Palidroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

function palindrome (word) //dichiaro la funzione
{
    const chars = word.split(""); //diviso la parola inserita in un array di caratteri
    console.log(chars); 

    let bool = false; //dichiaro il valore di ritorno

    let j = chars.length - 1; //dichiaro un indice che parta dal fondo dell'array

    for (let i = 0; i < chars.length; i++) //ciclo per varare l'array dall'inizio
    {
        console.log(chars[i], chars[j]); 
        
        if ( chars[i] === chars[j] ) //confronto delle lettere con i che parte dall'inizio e j che parte dalla fine
        {
            console.log("lettera uguale");
            bool = true; //se le lettere sono uguali, imposto il valore di ritorno a vero e proseguo il ciclo
        }
        else
        {
            console.log("lettera diversa");
            bool = false; 
            break; //se le lettere sono diverse, imposto il valore di ritorno a falso e interrompo il ciclo
        }

        j--; //decremento il secondo indice
    }

    return bool;
}


let word = prompt("Inserisci una parola"); //faccio inserire all'utente una parola
let response = palindrome(word); //richiamo la funzione

if (response) //scrivo se la parola è palindroma o meno a seconda del valore di ritorno della funzione
    alert("stringa palindroma");
else
    alert("stringa non palindroma");




// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.