console.log(data)

const eventos = data.events;
console.log(eventos);

let categories = data.category;
console.log(categories);
let filterEvents=[];

function createFilterEvents(){
    console.log(data.forEach(each => {
        if (categories === each.category){
            let filterCards = 
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
        
            filterEvents.push(filterCards);
            console.log(filterEvents);
        }
    }))
    
}

createFilterEvents();