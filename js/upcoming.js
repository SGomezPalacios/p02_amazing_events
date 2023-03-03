console.log(data)

const eventos = data.events;
console.log(eventos);

let currentDate = data.currentDate;
console.log(currentDate);
let upcomingEvents=[];

function printUpcomingEvents(){
    for(let elemento of eventos){
        if(elemento.date > currentDate){
            let upcomingCards = 
                `<div class="card card-details">
                    <img src="${elemento.image}" class="card-img-top img-category" alt="...">
                    <div class="card-body">
                    <h4 class="card-title">${elemento.name}</h4>
                    <p class="card-text">${elemento.description}</p>                   
                    <a href="./details.html?_id=${elemento._id}">More details</a>
                    </div>
                    <div class="card-body">
                        <button class="button-font" type="button" name="buy" id="buy">BUY</button>
                    </div>
                </div>`
        
            upcomingEvents.push(upcomingCards);
            console.log(upcomingEvents);
        }
    }    
    let upcomingCards = document.getElementById('cardUpcomingEvents');
    upcomingCards.innerHTML= upcomingEvents.join('')
}

printUpcomingEvents();
