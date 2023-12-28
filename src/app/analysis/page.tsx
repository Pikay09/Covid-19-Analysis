'use client'
import { useState, useEffect } from "react"
import ComposeRecharts from "../components/composedCharts"
import PieRecharts from "../components/pieCharts"
import SimpleCharts from "../components/simpleCharts"
import {countryDataFetcher} from "../tools"
import Link from "next/link"


export default function Analysis() {

    type actualData = {
        cases: object, dead: object, recover:object
    }
    const preData:actualData = {cases:[],dead:[], recover:[]}
    const [stats, setStats] = useState(preData)
    const [res, setRes] = useState('')
    const [input, setInput] = useState("MY")

    let msiaMonthly = `https://disease.sh/v3/covid-19/historical/${input}?lastdays=30`

    let msiaToday = `https://disease.sh/v3/covid-19/countries/${input}?strict=true`

    
    useEffect(()=>{
        countryDataFetcher(msiaMonthly).then((data:any)=>{
            const statsMap:actualData = {
                cases: Object.values(data.timeline.cases),
                dead: Object.values(data.timeline.deaths),
                recover: Object.values(data.timeline.recovered)
            }
            setStats(statsMap)
            if(!data){
                setStats(preData)
            }
        })
    },[msiaMonthly])

    const handleChange = (e:any)=>{
        //setInput(`https://disease.sh/v3/covid-19/countries/${e.target.value}?strict=true`)
        setInput(e.target.value)
        //msiaToday = `https://disease.sh/v3/covid-19/countries/${input}?strict=true`
        console.log(input)
    }

    const Loaded = ()=>{
        return <div>
            <ComposeRecharts stats={stats} />
            Covid-19 cases and recovery projection (cases x100)
            <SimpleCharts stats={stats}/>
        </div>
    }
        
    
    return <div className="p-2 m-auto text-center">
        <br/>
        <Link href={'/'}>
          <button className="bg-red-900 p-2 rounded">Home</button>
        </Link>
        <br/>
        <br/>
        <label>
            <input className="text-black" onChange={handleChange} value={input}/>
        </label>
        <h1 className="py-2 text-xs">type country name or ID followed by space</h1>
        <PieRecharts searchInput={input} />
        Covid-19 cases in the past 30 days (cases x100)
        {stats.cases? <Loaded/> : <h1>Fetching data ...</h1>}
        
        
    </div>
    
}