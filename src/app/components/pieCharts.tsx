'use client'

import {useEffect, useState} from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { getAllWorldCases } from "../tools";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

let msiaToday = 'https://disease.sh/v3/covid-19/countries/MY?strict=true'


export default function PieRecharts(stats:any) {
    const [data, setData] = useState(data01)
    const [res, setRes] = useState('')
    const [input, setInput] = useState("MY")

    console.log(stats[0])
    useEffect(()=>{
        getAllWorldCases(msiaToday).then((res:any)=>{
            if(res){
                const dataarr = [
                    { name: "Population", value: res.population, fill: 'skyblue' },
                    { name: "Cases", value: res.cases, fill: 'orange' },
                    { name: "Recovered", value: res.recovered , fill: 'green'},
                    { name: "Active", value: res.active , fill: 'red'}
                  ];
                  setData(dataarr)
                  setRes(res)
            }
        })
    },[stats, msiaToday])

    const handleChange = (e)=>{
        //setInput(`https://disease.sh/v3/covid-19/countries/${e.target.value}?strict=true`)
        setInput(e.target.value)
        msiaToday = `https://disease.sh/v3/covid-19/countries/${input}?strict=true`
        console.log(input)
    }

  return (
    <div>
        <br/>
        <br/>
        <label>
            <input className="text-black" onChange={handleChange} value={input}/>
        </label>
        <h1>Country : {res.country}</h1>
    <PieChart width={1000} height={400}>
        <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
        />
        <Tooltip />
    </PieChart>
    <h1>new cases today : {res.todayCases} </h1>
    <h1>new deaths today : {res.todayDeaths} </h1>
    <br/>
    <br/>
    </div>
   
  );
}
