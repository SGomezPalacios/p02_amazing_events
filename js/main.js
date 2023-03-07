console.log(data)

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
}

function printEvents (){
    let cards = document.getElementById('cardEvents');
    cards.innerHTML= eventCards.join("")
}

createEvents();
printEvents();