console.log(data)

const eventos = data.events;
console.log(eventos);

let currentDate = data.currentDate;
console.log(currentDate);
let detailsEvents=[];

function createDetailsEvents(){
    for(let elemento of eventos){
        if(elemento.date < currentDate){
            let detailsCards = 
                `<div class="card card-details">
                    <img src="${elemento.image}" class="card-img-top img-category" alt="...">
                    <div class="card-body">
                    <h4 class="card-title">${elemento.name}</h4>
                    <p class="card-text">${elemento.description}</p>
                    <p class="card-text">Date: ${elemento.date}</p>
                    <p class="card-text">Price: $ ${elemento.price}</p>                    
                    <a href="./details.html">More details</a>
                    </div>
                    <div class="card-body">
                        <button class="button-font" type="button" name="buy" id="buy">BUY</button>
                    </div>
                </div>`
        
            detailsEvents.push(detailsCards);
            console.log(detailsEvents);
        }
    }    
    let detailsCards = document.getElementById('cardDetails');
    detailsCards.innerHTML= detailsEvents.join('')
}

createDetailsEvents();