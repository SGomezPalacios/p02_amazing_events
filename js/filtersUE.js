let templateFilter = (data) => {
    return `
    <div class="card card-details">
        <img src="${data.image}" class="card-img-top img-category" alt="...">
        <div class="card-body">
        <h4 class="card-title">${data.name}</h4>
        <p class="card-text">${data.description}</p>
        <p class="card-text">Price: $ ${data.price}</p>
        <a href="./details.html?_id=${data._id}">More details</a>
        </div>
        <div class="card-body">
            <button class="button-font" type="button" name="buy" id="buy">BUY</button>
        </div>
    </div>`
    }

let printCards = (id_html, arrayEvents) => {
    let selector = document.querySelector(`#${id_html}`)
    let templates = arrayEvents.map(templateFilter).join('')
    selector.innerHTML = templates
/*     console.log(templates) */
}

let selectors = (idText, idChecks, arrayEvents) => {
    let inputText = document.querySelector(`#${idText}`).value
    let inputChecks = Array.from(document.querySelectorAll(`.${idChecks}:checked`)).map(each => each.value)
    console.log(inputText)
    let filterEvents = arrayEvents.filter(each => {
        return ((
            each.name.toLowerCase().includes(inputText.toLowerCase().trim()) ||
            each.description.toLowerCase().includes(inputText.toLowerCase().trim()) || 
            each.place.toLowerCase().includes(inputText.toLowerCase().trim())
        ) && (
            inputChecks.length === 0 || inputChecks.includes(each.category)
        ) && (
            each.date > data.currentDate
        ))

    })
    printCards("cardUpcomingEvents", filterEvents)

}

document.querySelector("#name").addEventListener("keyup", ()=> selectors("name", "checks", data.events))