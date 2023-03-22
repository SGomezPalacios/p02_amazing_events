/* console.log(data)

const eventos = data.events;
console.log(eventos);

let eventCards= [];

function createEvents(){
    for(let event of eventos){
        let cards = 
            `<div class="card card-details">
                <img src="${event.image}" class="card-img-top img-category" alt="...">
                <div class="card-body">
                <h4 class="card-title">${event.name}</h4>
                <p class="card-text">${event.description}</p>
                <p class="card-text">Price: $ ${event.price}</p>
                <a href="./details.html?_id=${event._id}">More details</a>
                </div>
                <div class="card-body">
                    <button class="button-font" type="button" name="buy" id="buy">BUY</button>
                </div>
            </div>`
            
        eventCards.push(cards)
    }
    function printEvents (){
        let cards = document.getElementById('cardEvents');
        cards.innerHTML= eventCards.join("")
    }
    printEvents();
}

/* API */
let urlAPI = 'https://mh.up.railway.app/api/amazing-events'

function createEvents(filterEvents){
    if (filterEvents.length > 0){    
        let eventCards= [];
        for(let event of filterEvents){
            let cards = 
                `<div class="card card-details d-flex flex-column justify-content-between" style="height: 590px">
                    <img src="${event.image}" class="card-img-top img-category" alt="...">
                    <div class="card-body" style="height: 220px" >
                        <h4 class="card-title">${event.name}</h4>
                        <p class="card-text">${event.description}</p>
                        <p class="card-text">Price: $ ${event.price}</p>
                        <a href="./details.html?id=${event.id}">More details</a>
                    </div>
                    <div class="card-body" style="padding-bottom: 0px">
                        <button class="button-font" type="button" name="buy" id="buy">BUY</button>
                    </div>
                </div>`
                
            eventCards.push(cards)
        }
        document.getElementById('cardEvents').innerHTML = eventCards.join("")

    } else {
        document.getElementById("cardEvents").innerHTML = 
        `<div class="card card-details">
            <img src="./src/assets/eventNF.png" alt="EventNotFound" class="card-img-top img-category">    
        </div>`
    }
}

async function fetchApi(){
    try {
        let fetchResponse = await fetch(urlAPI)
        let response = await fetchResponse.json()
        let array_events = response.events
        /* console.log(array_events) */

        let inputText = document.getElementById("name").value
        let inputChecks = Array.from(document.querySelectorAll(".checks:checked")).map(each => each.value)
        let filterEvents = array_events.filter(each => {
            return (( each.name.toLowerCase().includes(inputText.toLowerCase().trim()) || each.place.toLowerCase().includes(inputText.toLowerCase().trim())
                ) && (
                inputChecks.length === 0 || inputChecks.includes(each.category))
                )
        })
        createEvents(filterEvents)
        /* console.log(filterEvents) */

    } catch(error){
        console.log('ocurrio un error')
        console.log(error)
    }
}

fetchApi()




