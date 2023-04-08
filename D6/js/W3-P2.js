// Il resto delle risposte deve essere scritto in JavaScript:

// ES.7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

  function h1Substitute(str){
    let h1Tag = document.getElementById("main-title");
    h1Tag.innerText = str; 
    h1Tag.style.color = "white"; 
    return h1Tag;
}
console.log(h1Substitute("TUTTO A 2 EURO!")); 


// ES.8: Scrivi una funzione per cambiare il colore di background della pagina

function changeBcgColor(color){
    document.body.style.backgroundColor = color;
}
    
console.log(changeBcgColor("purple"));


// ES.9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio

function changeAdress(writeAdress){
    let newAdress = document.getElementById("adress");
    newAdress.innerText=writeAdress;
    return newAdress;
}

console.log(changeAdress("questo è il nuovo indirizzo!"));


// ES.10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function newClass(){
    let linkArray = document.getElementsByClassName("link");
    let newlinkArray = [];
        for(i=0;i<linkArray.length;i++){
            newlinkArray = linkArray[i].classList.add("link2");
        }
    return newlinkArray;
}

console.log(newClass());


// ES.11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function imagesNewClass(){
    let arrImages = document.getElementsByTagName("img");
        for(let i = 0; i<arrImages.length; i++){
            arrImages[i].classList.toggle("hidden");
        }
    return arrImages;
}

console.log(imagesNewClass());


// ES.12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    return "rgb("+red+","+green+","+blue+")";
}


function setColor(){
    let randomColor = getRandomColor();
    let prices = document.getElementsByClassName("price");
        for (let i=0; i<prices.length; i++){
            prices[i].style.color = randomColor;
        }
}

console.log(setColor());
