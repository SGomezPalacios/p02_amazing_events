console.log(data)

let query = location.search;

let params = new URLSearchParams(query);
console.log(params)
let id = params.get("_id");

let cardEvents= data.events.find((evento) => evento._id == id)
console.log(cardEvents)

let detailsCard = document.getElementById('cardDetails')
detailsCard.innerHTML= `<div class="card card-details">
    <img src="${cardEvents.image}" class="card-img-top img-category" alt="...">
    <div class="card-body">
    <h4 class="card-title">${cardEvents.name}</h4>
    <p class="card-text">${cardEvents.description}</p>
    <p class="card-text">Date: ${cardEvents.date}</p>
    <p class="card-text">Price: $ ${cardEvents.price}</p>                    
    </div>
    <div class="card-body">
        <button class="button-font" type="button" name="buy" id="buy">BUY</button>
    </div>
    </div>`;
