console.log(data)
let dates = data.events;
let query = location.search;
let params = new URLSearchParams(query);
console.log(params)
let id = params.get("_id");

function createDetail(cardEvents){ 
    return`
    <div class="card card-details">
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
    </div>
    `
}

function printDetail(id, cardEvents, array_data){
    let detailsCard = document.querySelector(id)
    let cardsEvents = array_data.find(each => each._id == cardEvents)
    let detail = createDetail(cardsEvents)
    detailsCard.innerHTML = detail
}

printDetail(`#cardDetails`, id, dates)