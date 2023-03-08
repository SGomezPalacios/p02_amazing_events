let cateChecks = []
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

printChecks('cateChecksPE', cateChecks)