/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("Es.1)")

let numOne = 10;
let numTwo = 3 ;

if(numTwo>numOne){
  console.log("il numero maggiore è "+numTwo);
}else{
  console.log("il numero maggiore è "+numOne);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("Es.2)")

let y = 7;

if(y !== 5){
   console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("Es.3)")

 let x = 20;
 let num = x%5;

 if(x%5 == 0){
   console.log("divisible by 5");
 }else{
   console.log("not divisible by 5");
 }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("Es.4)")

let a = 8, b = 0;

 if( a+b == 8 || a-b == 8 || a == 8 || b == 8){
  console.log("una delle opzioni è vera");
}else{
 console.log("nessuna delle opzioni è vera");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("Es.5)");

let totalShoppingCart = 60;
let overcharge = 10;
let checkout;

if(totalShoppingCart<=50){
  checkout = totalShoppingCart + overcharge;
}else{
  checkout = totalShoppingCart;
}

console.log("totale da pagere: "+checkout);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("Es.6)");

let totalShoppingCartA = 10;
let overchargeA = 10;
let checkoutA;
let discount = 0.8;

if(totalShoppingCartA<=50){
  checkoutA = (totalShoppingCartA * discount) + overchargeA;
}else{
  checkoutA = totalShoppingCartA * discount;
}

console.log("totale da pagere CON SCONTO: "+checkoutA);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("Es.7)");

let g = 250, h = 20, i = 30;
let min, med, max;

if (g > h && g > i) {
 max = g; 
   if (h > i) {
    med = h;
    min = i;
  } 
  else {
    med = i;
    min = h;
   }
}
else if (h > g && h > i) {
  max = h;
     if (g > i) {
      med = g;
      min = i;
    }
     else {
      med = i;
      min = g;
    }
}
else {
  max = i;
  if (g > h) {
    med = g;
    min = h;
  }
  else {
    med = h;
    min = g;
  }
}
console.log(max, med, min);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log("Es.8)");

let text = "22";
let numA = 22;
let numB = 22.3;

console.log(typeof text);
console.log(typeof numA);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca).
*/

console.log("Es.9)");

let z = 38;

if (z%2==0) console.log("il numero è PARI");
else console.log("il numero è DISPARI");


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("Es.10)");

let val = 3;

  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

console.log("Es.11)");

let c = 23;

if(c<5) console.log("Tiny");
else if(c<10) console.log("Small");
else if(c<15) console.log("Medium");
else if(c<20) console.log("Large");
else console.log("Huge");



/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

console.log("Es.12)")

let isMale = false;

let gender = isMale ? "male" : "female"

console.log(gender);


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

console.log("Es.13)")

let d = -1;

while(d<5){
  d++;
  console.log(d);
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/
console.log("Es.14)")

for (let step = 0; step <=10; step++) console.log(step);

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

console.log("Es.15)")

for (let stepA = 0; stepA <= 10; stepA++){
  if(stepA==3 || stepA==8){
    continue;
  }
  console.log(stepA);
}


/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

console.log("Es.16)");

for(stepB = 0; stepB<=15; stepB++){
  if(stepB&2==0) console.log(stepB+": pari");
  else console.log(stepB+": dispari");
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

console.log("Es.17)");

for(stepC = 0; stepC <= 100; stepC++){
  if(stepC%3==0 && stepC%5==0) console.log("FizzBuzz");
  else if(stepC%3==0) console.log("Fizz");
  else if(stepC%5==0) console.log("Buzz");
  else console.log(stepC);
}


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

let day = 2;

switch (day) {
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case  7:
    console.log("Domenica");
    break;
  default:
    console.log("Valore non valido. Inserire un numero da 1 a 7");
    break;
}
