// seleziono l'elmento del DOM per output delle card
const card = document.querySelector(".containerCard");

// chiamata ajax tramite axios
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {

        // prendo l'array con le cards
        const cardObj = response.data;
        console.log(cardObj);

        // ciclo su tutta la lunghezza dell'array
        for (i = 0; i < cardObj.length; i++) {

            // destrutturo dall'elemento iesimo
            const { title, date, url } = cardObj[i];

            // stampo in pagina la card
            card.innerHTML += `
            <div class="card">
                 <figure>
                     <img src="${url}" alt="${title}">
                 </figure>   
                     
                 <figcaption>
                     <div class="date">${date}</div>
                     <h3>${title.toUpperCase()}</h3>                    
                 </figcaption>
                 <div class="pin">
                     <img src="./img/pin.svg" alt="pin">
                 </div>
            </div>
            `
        }

        // selezioni gli elementi del DOM per l'apertura delle immagini fullscreen
        const imageCard = document.querySelectorAll("figure img");
        const main = document.querySelector("main");

        // ciclo su tutte le immagini delle cards create in precedenza
        imageCard.forEach((imageCard) => {
            // aggiungo l'evento al click
            imageCard.addEventListener("click", () => {

                // creo un nuovo elemento e gli associo la classe e il display block
                const openImage = document.createElement("div");
                openImage.className = "fullScreen";
                openImage.style.display = "block";
                openImage.innerHTML = `
                        <button id="closeButton">Chiudi</button>
                        <img src="${imageCard.src}" alt="${imageCard.alt}">                         
                         `;

                // aggiungo il contenitore al main
                main.appendChild(openImage);

                // seleziono il bottone dal DOM
                const closeButton = document.getElementById("closeButton");
                // chiudo il fullscreen al click sul bottone
                closeButton.addEventListener("click", () => {

                    // imposto di nuovo display none e rimuovo il contenitore
                    openImage.style.display = "none";
                    main.removeChild(openImage);
                });
            });
        });


    })
    .catch(error => {
        console.error(error);
    })

