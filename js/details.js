/* console.log(data)
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
 */

let query = location.search;
let params = new URLSearchParams(query);
console.log(params)
let id = params.get("id");

function createDetail(cardEvents){ 
    return`
    <div class="card card-details" style="width: 50rem">
        <img src="${cardEvents.image}" class="card-img-top img-detail" alt="...">
        <div class="card-body">
            <h4 class="card-title">${cardEvents.name}</h4>
            <p class="card-text">${cardEvents.description}</p>
            <p class="card-text">Date: ${cardEvents.date}</p>
            <p class="card-text">Category: ${cardEvents.category}</p>
            <p class="card-text">Place: ${cardEvents.place}</p>
            <p class="card-text">Capacity: ${cardEvents.capacity}</p>
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
    let cardsEvents = array_data.find(each => each.id === cardEvents)
    let detail = createDetail(cardsEvents)
    detailsCard.innerHTML = detail
}

async function fetchApi(){
    try {
        let urlAPI = 'https://mh.up.railway.app/api/amazing-events'
        let fetchResponse = await fetch(urlAPI)
        console.log(fetchResponse)
        let response = await fetchResponse.json()
        console.log(response)
        let array_events = response.events
        console.log(array_events)

        printDetail(`#cardDetails`, id, response.events)

    } catch(error){
        console.log('ocurrio un error')
        console.log(error) 
    }
}

fetchApi()