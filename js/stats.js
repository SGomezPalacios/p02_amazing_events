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

        array_events = array_events.sort((ev1, ev2) => ev1.assistance - ev2.assistance)
        document.getElementById("max_ass").innerHTML = array_events[array_events.length-1].name
        document.getElementById("maxAss_value").innerHTML = array_events[array_events.length-1].assistance
        document.getElementById("min_ass").innerHTML = array_events[0].name
        document.getElementById("minAss_value").innerHTML = array_events[0].assistance
        
        array_events = array_events.sort((ev1, ev2) => ev1.capacity - ev2.capacity)
        document.getElementById("max_cap").innerHTML = array_events[array_events.length-1].name
        document.getElementById("maxCap_value").innerHTML = array_events[array_events.length-1].capacity
        
    } catch(error){
        console.log('ocurrio un error')
        console.log(error) 
    }
}

table1()

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