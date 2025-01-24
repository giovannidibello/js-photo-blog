// seleziono elmenti del DOM per output
const card = document.querySelector(".containerCard");

// chiamata ajax tramite axios
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {

        // prendo l'array con le cards
        const cardObj = response.data;
        console.log(cardObj);

        // ciclo su tutta la lunghezza dell'array
        for (i = 0; i < cardObj.length; i++) {

            // destrutturo 
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

    })
    .catch(error => {
        console.error(error);
    })