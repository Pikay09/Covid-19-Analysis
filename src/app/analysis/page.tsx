
import ComposeRecharts from "../components/composedCharts"
import PieRecharts from "../components/pieCharts"
import SimpleCharts from "../components/simpleCharts"
import {getAllWorldCases} from "../tools"

let msiaMonthly = 'https://disease.sh/v3/covid-19/historical/MY?lastdays=30'

let msiaToday = 'https://disease.sh/v3/covid-19/countries/MY?strict=true'

export default async function Analysis() {

    const month = await getAllWorldCases(msiaMonthly)
    const today = await getAllWorldCases(msiaToday)
    const stats = {
        cases: Object.values(month.timeline.cases),
        dead: Object.values(month.timeline.deaths),
        recover: Object.values(month.timeline.recovered)
    }


    console.log("stats", today)

    return <div>
        
        <PieRecharts />
        Covid-19 cases in the past 30 days (cases x100)
        <ComposeRecharts stats={stats} />
        Covid-19 cases and recovery projection (cases x100)
        <SimpleCharts stats={stats}/>
        
    </div>
    
}