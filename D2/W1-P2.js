/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

 RISPOSTA:
    I datatype sono una delle categorie di ingredienti che possiamo usare per raggiungere uno scopo, o se lo paragoniamo ad una ricetta, è la specificazione di che tipo di ingredienti andremo 
    ad utillizare, come la farina o il sale.
    I principali datatype che utilizza Javascript sono le stringhe, i numeri, i booleani, gli undefined e null, BigInt. 

    - Le STRINGHE vengono riconosciuti da Javascript solo se messi in mezzo a delle virgolette che gli permettono di capire che ciò che deve elaborare si tratta di testo.
    - I NUMERI non hanno la necessità di essere inseriti all'interno di virgolette e posso essere utilizzate per assegnare un valore numerico alle variabili ed eseguire operazioni.
    - I BOOLEANI hanno lo scopo di verificare se le condizioni che abbiamo stabilito sono vere o false, mettere a confronto le operazioni, funzioni, utilizzando le variabili stesse. 
    - UNDEFINED e null pur assomigliandosi nel significato, non hanno la stessa valenza in codice. Il primo indica un valore non definito, come può essere una variabile che non è ancora stata
    dichiarata, quindi a cui non è stato assegnato un valore, che nel momento di essere richiamata nella console non sa a quale valore fare riferimento. 
    - NULL rappresenta l'assenza intenzionale di qualsiasi valore di una variabile, indicando che questa punta a nulla, come un contenitore vuoto.
    - Il BIGINT viene utilizzato per rappresentare i numeri che sono troppo grandi per essere rappresentati come type NUMBER. Questi posso essere utilizzati in operazionei aritmetiche sono con altri BigInt.
    */


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
    
    RISPOSTA:
    Un oggetto in Javascript equivale ad un oggetto nella vita reale. In quanto oggetto è un insieme di carattestiche o proprietà standard che possono variare in base al singolo. 
    Ad esempio tutte le persone hanno caratteristiche come nome, altezza ed età, ma per ogni singola persona queste varatteristiche hanno valori differenti. */


/* ESERCIZIO 3
 Scriviti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20. */

    console.log(12+20);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.*/

    let x = 12;
    console.log('"x" è uguale a '+x);


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.*/

    var name = "Katherine";

    console.log('Il mio nome è '+name);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).*/

    console.log(4-x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().*/

    let name1 = "john";
    let name2 = "John";

    console.log(name1===name2);
    console.log(name1===name2.toLowerCase());