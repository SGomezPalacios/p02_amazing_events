let urlAPI = 'https://mh.up.railway.app/api/amazing-events'
async function table1(){
    try {
        let fetchResponse = await fetch(urlAPI +'?time=past')
        //console.log(fetchResponse)
        let response = await fetchResponse.json()
        //console.log(response)
        let array_events = response.events
        //console.log(array_events)

        let stats_perc = array_events.map(each=> {
            let stats_event = {
                name: each.name,
                percent: 100 * each.assistance / each.capacity
            }
            return stats_event
        }).sort((ev1, ev2) => ev1.percent - ev2.percent)
        
        let fetchResponse_all = await fetch(urlAPI)
        //console.log(fetchResponse)
        let response_all = await fetchResponse_all.json()
        //console.log(response)
        let array_events_all = response_all.events
        //console.log(array_events)
        let stats_cap = array_events_all.map(each=> {
            let stats_event_all = {
                name: each.name,
                capacity: each.capacity
            }
            return stats_event_all
        }).sort((ev1, ev2) => ev1.capacity - ev2.capacity)
        console.log(stats_perc)

        document.getElementById("table1").innerHTML = template_table1(stats_perc[stats_perc.length-1], stats_perc[0], stats_cap[stats_cap.length-1])

    } catch(error){
        console.log('ocurrio un error')
        console.log(error) 
    }
}

table1()

function template_table1(max, min, max_cap){
    return `<tr>
        <td class="rows">${max.name}: ${max.percent.toFixed(2)}%</td>
        <td class="rows">${min.name}: ${min.percent.toFixed(2)}%</td>
        <td class="rows">${max_cap.name}: ${max_cap.capacity}</td>
    </tr>
    `
}

async function table2(){
    try {
        let urlAPI = 'https://mh.up.railway.app/api/amazing-events?time=past'
        let fetchResponse = await fetch(urlAPI)
        /* console.log(fetchResponse) */
        let response = await fetchResponse.json()
        /* console.log(response) */
        let array_events = response.events
        /* console.log(array_events) */

        let array_categories= []
        array_events.forEach(each=> {
            if (!array_categories.includes(each.category)){
                array_categories.push(each.category)
            }
        })
        console.log(array_categories)

        let events_category = array_categories.map(each => array_events.filter(event => event.category === each))

        console.log(events_category)
    
        events_category = events_category.map(each => {
            return each.reduce((acc, every) => {
                let statis = {
                    total_assistance: acc.total_assistance + every.assistance,
                    total_capacity: acc.total_capacity + every.capacity,
                    profit: (every.assistance * every.price)+ acc.profit,
                    perc_assistance: acc.total_assistance / acc.total_capacity * 100,
                    category: every.category
                }
                return statis
            },{
                total_assistance: 0,
                total_capacity: 0,
                profit: 0,
                perc_assistance: 0,
                category: ''
            }
            )
        })
        //console.log(events_category)
        document.getElementById("table2").innerHTML = events_category.map(each => template_table2(each.category, each.profit, each.perc_assistance)).join('')
        
    } catch(error){
        console.log('ocurrio un error')
        console.log(error) 
    }
}
table2()

function template_table2(cate, profit, perc){
    return `
    <tr>
        <td class="rows">${cate}</td>
        <td class="rows">$${profit}</td>
        <td class="rows">${perc.toFixed(2)}%</td>
    </tr>
    `
}

async function table3(){
    try {
        let urlAPI = 'https://mh.up.railway.app/api/amazing-events?time=upcoming'
        let fetchResponse = await fetch(urlAPI)
        /* console.log(fetchResponse) */
        let response = await fetchResponse.json()
        /* console.log(response) */
        let array_events = response.events
        /* console.log(array_events) */

        let array_categories = array_events.map(each => each.category)
        array_categories= new Set(array_categories)
        array_categories= [...array_categories]
        //console.log(array_categories)
        
        let events_category = array_categories.map(each => array_events.filter(event => event.category === each))

        console.log(events_category)
    
        events_category = events_category.map(each => {
            return each.reduce((acc, every) => {
                let statis = {
                    total_estimate: acc.total_estimate + every.estimate,
                    total_capacity: acc.total_capacity + every.capacity,
                    profit: (every.estimate * every.price)+ acc.profit,
                    perc_estimate: acc.total_estimate / acc.total_capacity * 100,
                    category: every.category
                }
                return statis
            },{
                total_estimate: 0,
                total_capacity: 0,
                profit: 0,
                perc_estimate: 0,
                category: ''
            }
            )
        })
        //console.log(events_category)
        document.getElementById("table3").innerHTML = events_category.map(each => template_table2(each.category, each.profit, each.perc_estimate)).join('')
        
    } catch(error){
        console.log('ocurrio un error')
        console.log(error) 
    }
}
table3()

function template_table3(cate, profit, perc){
    return `
    <tr>
        <td class="rows">${cate}</td>
        <td class="rows">$${profit}</td>
        <td class="rows">${perc.toFixed(2)}%</td>
    </tr>
    `
}