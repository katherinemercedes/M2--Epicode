/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- da ogni inserzione trovata, elimina i campi "description", "requirements", "benefits" e "company_profile" per semplificare il risultato

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

//MODIFICA DEL DOM - COSTRUZIONE DEL DIV CHE CONTERRÀ I RISULTATI
let container = document.getElementById("main"); // Catturato container del main
let divResults = document.createElement("div"); // Creato div contenitore delle risposte
divResults.id = "new-div"; // Aggiunto id al nuovo div
container.appendChild(divResults); // Aggiunto il nuovo div al main
divResults.innerHTML = "<ul>"; // Aggiunto un elemento lista non ordinata nel nuovo div
let ul = document.querySelector("ul"); // Catturato la lista dentro il nuovo div
let countResult = document.createElement("p"); // Creato paragrafo per il contatore

// MOSTRA TUTTI GLI ELEMENTI DELL'ARRAY JOBS
// Se l'utente è interessato a vedere l'elenco completo, questa funzione mostra nell'ul la lista completa dei lavori disponibili
let show = document.getElementById("show");
show.addEventListener("click", () => {
  ul.innerHTML = ""; // Svuola la lista dei risultati di eventuali ricerche precedenti
  for (jobEl of jobs) {
    ul.innerHTML += `<li> ${jobEl.title} <i>in</i> ${jobEl.location} </li>`; // Vengono inseriti nella lista dei risultati tutti gli elementi dell'array jobs
  }
  countResult.innerHTML = `<p>Currently, these are all the available positions.</p>`; // Inserisco paragrafo alla fine della lista
});

// RICERCA NELL ARRAY JOBS E OUTPUT NELLA LISTA DEI RISULTATI
let bottone = document.getElementById("button"); // Catturo il bottone SEARCH
// Aggiungo event listener per effettuare la ricerca
bottone.addEventListener("click", () => {
  let arrResult = []; // Dichiaro l'array di stoccaggio dei risultati trovati
  ul.innerHTML = ""; // Permette di svuotare i risultati della ricerca precedente prima di ogni nuova ricerca
  let jobPosition = document.getElementById("job-position").value.toLowerCase(); // Catturo la stringa inserita dall'utente, questa posizione permette di resettare il valore ad ogni nuova ricerca
  let jobLocation = document.getElementById("job-location").value.toLowerCase();
  countResult.innerHTML = ""; // Resetto il contatore ad ogni nuova ricerca

  for (resEl of jobs) {
    // Ciclo di ricerca
    if (!jobPosition && !jobLocation) {
      // parametri per una ricerca non valida
      ul.innerHTML =
        "<p>What are you looking for? insert your preference to start</p>"; // Output ricerca non valida
    } else if (
      resEl.title.toLowerCase().includes(jobPosition) &&
      resEl.location.toLowerCase().includes(jobLocation)
    ) {
      // Se l'utente inserisce i parametri la ricerca si avvia
      arrResult.push(resEl.title, resEl.location); // Push dei risultati nell'array di stoccaggio
      ul.innerHTML += `<li> ${resEl.title} <i>in</i> ${resEl.location}`; // Inserisco i valori dell'array di stoccaggio nella lista creata in precendenza per l'output a schermo
        if (arrResult.length <= 2 || arrResult.length == 0) { // Output del contatore in base al numero dei risultati
          countResult.innerHTML = `<p>We found ${arrResult.length / 2} available position</p>`; // Singolo risultato
        } else {
          countResult.innerHTML = `<p>We found ${arrResult.length / 2} available positions</p>`; 
        }
        divResults.appendChild(countResult); // Inserisco il paragrago come ultimo elemento del div dei risultati
    } else {
      countResult.innerHTML = `<p>We found ${arrResult.length / 2} available positions</p>`; // Output nel caso in cui non ci siano corrispondenze
      divResults.appendChild(countResult);
    }
  }
});

//FUNZIONE DI RESET DELLA RICERCA
let myForm = document.getElementsByClassName("search-space"); // Catturo gli input del form
let resetButton = document.getElementById("reset"); // Catturo il tasto reset

// Aggiungo event listener al tasto reset
resetButton.addEventListener("click", () => {
  ul.innerHTML = ""; // Svuola la lista dei risultati
  countResult.innerHTML = ""; //Svuota il contatore
  for (input of myForm) {
    input.value = ""; // Svuola l'input cancellando la stringa inserita dall'utente
  }
});
