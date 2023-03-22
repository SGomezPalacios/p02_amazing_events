/* let cateChecks = []
data.events.forEach(each => {
    if(!cateChecks.includes(each.category)){
        cateChecks.push(each.category)
    }
})
console.log(cateChecks)

let templatesChecks = (category) => {
    return `
    <div class="check-padd">
        <input class="checks" type="checkbox" onclick='selectors("name", "checks", data.events)' name="category" id="${category}" value="${category}">
        <label for="${category}">${category}</label>
    </div>
    `
}

let printChecks = (id, categories) => {
    let selector = document.querySelector(`#${id}`)
    let templates = categories.map(templatesChecks).join('')
    selector.innerHTML = templates
    console.log(templates)
}

printChecks('cateChecks', cateChecks)
 */

/* API */
async function printCategories(){
    let urlAPI = "https://mh.up.railway.app/api/amazing-events"
    let fetchResponse = await fetch(urlAPI)
/*     console.log(fetchResponse) */
    let response = await fetchResponse.json()
/*     console.log(response) */
    let array_events = response.events

    let cateChecks = []
    array_events.forEach(each =>{
        if(!cateChecks.includes(each.category)){
            cateChecks.push(each.category)
        }
    })

    let printChecks = []
    for (let category of cateChecks){
        let cate = `
        <div class="check-padd">
            <input class="checks" type="checkbox" onclick="fetchApi()" name="category" id="${category}" value="${category}">
            <label for="${category}">${category}</label>
        </div>
        `
        printChecks.push(cate)
    }
    document.getElementById("cateChecks").innerHTML = printChecks.join("")
}

printCategories()