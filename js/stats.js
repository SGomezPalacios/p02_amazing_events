async function table1(){
    /* Ordeno por asistencia, luego por capacidad e imprimo en la tabla 1 */
    try {
        let urlAPI = 'https://mh.up.railway.app/api/amazing-events?time=past'
        let fetchResponse = await fetch(urlAPI)
        console.log(fetchResponse)
        let response = await fetchResponse.json()
        console.log(response)
        let array_events = response.events
        console.log(array_events)

        let stats = array_events.map(each=> {
            let stats_event = {
                name: each.name,
                percent: 100 * each.assistance / each.capacity
            }
            return stats_event
        }).sort((ev1, ev2) => ev1.percent - ev2.percent)
        
        let stats_cap = array_events.map(each=> {
            let stats_event = {
                name: each.name,
                capacity: each.capacity
            }
            return stats_event
        }).sort((ev1, ev2) => ev1.capacity - ev2.capacity)
        console.log(stats)
        console.log(stats[0])
        console.log(stats[stats.length-1])

        document.getElementById("table1").innerHTML = template_table1(stats[stats.length-1], stats[0], stats_cap[stats_cap.length-1])

    } catch(error){
        console.log('ocurrio un error')
        console.log(error) 
    }
}

table1()

function template_table1(max, min, max_cap){
    return `<tr>
        <td class="rows">${max.name}: ${parseInt(max.percent)}%</td>
        <td class="rows">${min.name}: ${parseInt(min.percent)}%</td>
        <td class="rows">${max_cap.name}: ${max_cap.capacity}</td>
    </tr>`
}

async function table2(){
    /* Traigo valores futuros de la API, hago un array de las categorias, 
    a los eventos le agrego el atributo profit (as. estimada por el precio) 
    para hacer los calculos, guardo e imprimo en la tabla 2*/
    try {
        let urlAPI = 'https://mh.up.railway.app/api/amazing-events?time=upcoming'
        let fetchResponse = await fetch(urlAPI)
        console.log(fetchResponse)
        let response = await fetchResponse.json()
        console.log(response)
        let array_events = response.events
        console.log(array_events)

        let categories= []
        for (let each of array_events){
            if (!categories.includes(each.category)){
                categories.push(each.category)
            }
        }
        
        for (let each of array_events){
            each.profit = each.estimate * each.price
        }

        let rows_table2 = []
        for (let category of categories){
            let profit = 0
            let assist_tot = 0
            let cap_tot = 0

            filterEvents = array_events.filter(each => each.category === category)
            filterEvents.forEach(each => {
                profit += each.profit
                assist_tot += each.estimate
                cap_tot+= each.capacity
            })

            let perc_ass = assist_tot / cap_tot * 100
            perc_ass = perc_ass.toFixed(2)

            let rows = `<tr>
                <td class="rows">${category}</td>
                <td class="rows">$${profit}</td>
                <td class="rows">${perc_ass}%</td>
                </tr>`
            rows_table2.push(rows)
            }

        document.getElementById("table2").innerHTML += rows_table2.join("")

    } catch(error){
        console.log('ocurrio un error')
        console.log(error) 
    }
}

table2()

async function table3(){
    /* Traigo valores pasados de la API, hago un array de las categorias, 
    a los eventos le agrego el atributo profit (asistencia por el precio) 
    para hacer los calculos, guardo e imprimo en la tabla 3*/
    try {
        let urlAPI = 'https://mh.up.railway.app/api/amazing-events?time=past'
        let fetchResponse = await fetch(urlAPI)
        console.log(fetchResponse)
        let response = await fetchResponse.json()
        console.log(response)
        let array_events = response.events
        console.log(array_events)

        let categories= []
        for (let each of array_events){
            if (!categories.includes(each.category)){
                categories.push(each.category)
            }
        }
        for (let each of array_events){
            each.profit = each.assistance * each.price  
        }

        let rows_table3 = []
        for (let category of categories){
            let profit = 0
            let assist_tot = 0
            let cap_tot = 0

            filterEvents = array_events.filter(each => each.category === category)
            filterEvents.forEach(each => {
                profit += each.profit
                assist_tot += each.assistance
                cap_tot+= each.capacity
            })

            let perc_ass = assist_tot / cap_tot * 100
            perc_ass = perc_ass.toFixed(2)

            let rows = `<tr>
                <td class="rows">${category}</td>
                <td class="rows">$${profit}</td>
                <td class="rows">${perc_ass}%</td>
                </tr>`
            rows_table3.push(rows)
            }

        document.getElementById("table3").innerHTML += rows_table3.join("")

        
    } catch(error){
        console.log('ocurrio un error')
        console.log(error) 
    }
}

table3()