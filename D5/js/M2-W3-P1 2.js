/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

console.log("Es. 1)");

function area(l1,l2){
return l1*l2;
}

console.log(area(10,15));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

console.log("Es. 2)");

function crazySum(int1,int2){
    if(int1===int2){
        return (int1 + int2)*3;
    }else{
        return int1 + int2;
    }
}

console.log (crazySum(30,30));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

console.log("Es. 3)");

function crazyDiff(int){
    let diff = int-19;
    return diff>19 ? diff*3 : diff-19;
}

console.log(crazyDiff(40));


/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

console.log("Es. 4)");

function boundary(int){
    return int>20 && int <= 100 || int === 400;
}

console.log(boundary(400));


/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

console.log("Es. 5)");

function codify(string){
    return string.startsWith("code") ? string : "code" + string;
}

console.log(codify("supercalifragilistihelspiralidoso"))


/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

console.log("Es. 6)");

function check3and7 (int){
   return int > 0 ? (int % 3 === 0 || int % 7 === 0) : "inserire un numero positivo";
}

console.log(check3and7(27));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

console.log("Es. 7)");

function reverseString(myString){
    let splitString = myString.split("");
    let revert = splitString.reverse();
    let reverseString = revert.join("");
    return reverseString;
}  

console.log(reverseString("paracetamolo"));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

console.log("Es. 8)");

function upperFirst(stringa) {
    let strVal = "";
    stringa = stringa.split(" ");
        for(var i=0; i<stringa.length; i++){
            strVal += stringa[i].slice(0,1).toUpperCase() + stringa[i].slice(1,stringa[i].lenght) + " ";
        }
    return strVal;
}
  
  console.log(upperFirst('nel mezzo del cammin di nostra vita'));

   


/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

console.log("Es. 9)");

function cutString(str) {
    return str.slice(1, -1);
  }
  console.log(cutString("randomico si"));
  

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

console.log("Es. 10)");

let myArr = [];

function giveMeRandom(n){
    for(let i = 0; i<n; i++){
    let arrRandom = Math.floor(Math.random()*10);
    myArr.push(arrRandom);
    }
    return myArr;
}

console.log(giveMeRandom(5));
