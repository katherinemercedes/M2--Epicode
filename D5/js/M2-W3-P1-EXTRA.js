// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

console.log("Es. EXTRA 1)");

let myArr = [];

function giveMeRandom(n){
    for(let i = 0; i<n; i++){
    let arrRandom = Math.floor(Math.random()*10);
    myArr.push(arrRandom);
    }
    return myArr;
}


let arr = giveMeRandom(9);

function checkArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    console.log(num > 5);
    if (num > 5) {
      sum += num;
    }
  }
  return sum;
}
console.log(arr);
console.log(checkArray(arr));

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

let shoppingCart = [
    {
        price: 3400,
        name: "iphone13",
        id: 1,
        qnt: 4,
    },
    {
        price: 50,
        name: "frullatore",
        id: 1,
        qnt: 2,
    },
    {
        price: 20,
        name: "cuccia",
        id: 3,
        qnt: 1,
    },
    {
        price: 500,
        name: "tablet",
        id: 4,
        qnt: 20,
    },
    {
        price: 700,
        name: "lavatrice",
        id: 5,
        qnt: 90,
    },
    {
        price: 320,
        name: "televisore",
        id: 5,
        qnt: 1,
    }
]

console.log("Es. EXTRA 2)");

function shoppingCartTotal(shoppingCart){
    let sum = 0;
    for (i=0; i<shoppingCart.length; i++)
    sum += shoppingCart[i].price * shoppingCart[i].qnt;  
    return sum;
}

console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

console.log("Es. EXTRA 3)");

let newObject = {price: 345, name: "neve", id:6, qnt:3};  //NUOVO OGGETTO DA INSERIRE NELL'ARRAY SHOPPINGCARD

function addToShoppingCart(newObject){

    let newShoppingCart = shoppingCart.push(newObject); //PUSH DEGLI ELEMENTI PRE-ESISTENTI DI SHOPPING CARD + NEWOBJECT
    return newShoppingCart;
}

console.log(addToShoppingCart(newObject));


/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

console.log("Es. EXTRA 4)");

function maxShoppingCart(shoppingCart){
    let mostExpensive = shoppingCart.reduce((max, min) => max.price*max.qnt > min.price*min.qnt ? max : min); //CONFRONTO DEL PREZZO MOLTIPLICATO PER LA QUANTITÀ
    return mostExpensive;
}

console.log(maxShoppingCart(shoppingCart)); //OGGETTO PIÙ COSTOSO



/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

console.log("Es. EXTRA 5)");

function latestShoppingCart(shoppingCart){
    let latestObject = shoppingCart.pop(); //SPOSTO L'ULTIMO OGGETTO IN UN NUOVO ARRAY
    return latestObject;
}

console.log(latestShoppingCart(shoppingCart)); 

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/
console.log("Es. EXTRA 6)");
console.log("non capisco la consegna");

function loopUntil(x){
    //non capisco la consegna
}

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

console.log("Es. EXTRA 7)");

let arrNum = [2,5,6,7,2,10]

function average (arrNum){
    let sum = 0;
    for(i=0; i<arrNum.length; i++){
        sum+= arrNum[i];
    }
     let average = sum/arrNum.length;
        return average;
}

console.log("la media aritmetica è: "+ average(arrNum));

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

console.log("Es. EXTRA 8)");

let arrString = ["supercalifragilistichelspiralidoso", "tavoletta grafica", "centro per l'impiego", "arcobaleno alla fine della collina dei ciliegi"]


function longest(arrString){
let length = 0;
let longest;
    for (i=0; i<arrString.length; i++){
        if(arrString[i].length > length){
            length = arrString[i].length;
            longest = arrString[i];     
        }
    }
return longest;
}

console.log(longest(arrString));



/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

console.log("Es. EXTRA 9)");

let casellaEmail = "questa email contiene un spam"; 
let casellaControllo = casellaEmail.toUpperCase(); //RENDE LA CASELLA EMAIL CASE INSENSITIVE
let myBool;

function emailContent(casellaControllo){
    if(casellaControllo.includes("SPAM") || casellaControllo.includes("SCAM")){ //CONTROLLO SE L\'EMAIL CONTIENE LE PAROLE SPAM O SCAM
        myBool = false;  //SI, QUINDI VIENE BLOCCATO
    }else{
        myBool = true;  // NON LE CONTIENE
    }
    return myBool;
}

console.log(emailContent(casellaControllo));

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

console.log("Es. EXTRA 10)");

let yourBirthDay = new Date("1995,08,16"); // INSERIRE IL GIORNO IN CUI SEI NATO


function diffDays(yourBirthDay){
    const dateToday = new Date(); //DATA ODIERNA
    let difference = dateToday.getTime() - yourBirthDay.getTime(); //DIFFERENZA DI ORE TRA LA DATA ODIERNA E LA DATA CUSTOM
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)); // ORE TRASFORMATE IN GIORNI
    return TotalDays;
}

console.log("sono passati "+ diffDays(yourBirthDay) +" giorni da quanto sei nato"); // RISULTATO: sono passati 10096 giorni da quando sei nato



/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 [
 ["00","01","02"],
 ["10","11","12"]
 ]
*/

console.log("Es. EXTRA 11)");

function matrixGenerator(x,y){
    arrMatrix = [];
    matrixRow = [];

    for(i=0; i<x ; i++){    //GENERO GLI ELEMENTI DELLA RIGA IN BASE ALLA X
        matrixRow.push(i);
    }
    for(j=0; j<y; j++){     // GENERO PIU RIGHE IN BASE ALLA Y
        arrMatrix.push(matrixRow);
    }
    return arrMatrix;
}

console.log(matrixGenerator(5,6)); //INSERENDO DEI VALORI NUMERICI SI MODIFICANO DIRETTAMENTE GLI ARGOMENTI X E Y 

//NON RIESCO AD INSERIRE IN MODO CORRETTO GLI INDICI